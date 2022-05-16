import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchPostsQuery } from "../../services/hn/hn.slice";
import { HnItem } from "../../services/hn/hn.types";
import HnPostCard from "./HnPostCard";

export const HnPostList = () => {
  const [page, setPage] = useState(0);
  const { data: fetchedPostList } = useSearchPostsQuery({ page, query: "" });
  const [shownPostList, setShownPostList] = useState<HnItem[]>([]);
  const incrementPage = () => {
    setPage(page + 1);
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
      <Grid container spacing={2}>
        {shownPostList &&
          shownPostList.map((post) => (
            <Grid item xs={12} sm={6} md={4} alignItems="stretch">
              <HnPostCard post={post} key={post.objectID}></HnPostCard>
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
        <Button variant="contained" onClick={incrementPage}>
          Load more
        </Button>
      </Box>
    </Box>
  );
};
