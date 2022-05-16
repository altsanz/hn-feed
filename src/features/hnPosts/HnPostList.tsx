import { Box, Button, CircularProgress, Grid, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useSearchPostsQuery } from "../../services/hn/hn.slice";
import { HnItem } from "../../services/hn/hn.types";
import HnPostCard from "./HnPostCard";
import { useDebounce } from "usehooks-ts";

export const HnPostList = () => {
  const [page, setPage] = useState(0);

  const [queryString, setQueryString] = useState("");
  const debouncedQueryString = useDebounce<string>(queryString, 500);
  const { data: fetchedPostList, isFetching } = useSearchPostsQuery({
    page,
    query: debouncedQueryString,
  });

  const [shownPostList, setShownPostList] = useState<HnItem[]>([]);
  const incrementPage = () => {
    setPage(page + 1);
  };

  const querySearchTerm = (evt: ChangeEvent<HTMLInputElement>) => {
    if (page !== 0) {
      setPage(0);
    }
    setQueryString(evt.target.value);
  };

  useEffect(() => {
    if (!fetchedPostList?.hits) return;
    if (page === 0) {
      setShownPostList(fetchedPostList.hits);
      return;
    }

    setShownPostList([...shownPostList, ...fetchedPostList.hits]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedPostList]);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", margin: "0 25px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px auto",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          onChange={querySearchTerm}
        />
      </Box>
      <Grid container spacing={2}>
        {shownPostList &&
          shownPostList.map((post) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              alignItems="stretch"
              key={post.objectID}
            >
              <HnPostCard post={post}></HnPostCard>
            </Grid>
          ))}
      </Grid>
      <Box
        sx={{
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isFetching && (
          <Button variant="contained" onClick={incrementPage}>
            Load more
          </Button>
        )}
        {isFetching && <CircularProgress />}
      </Box>
    </Box>
  );
};
