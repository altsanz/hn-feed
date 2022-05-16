import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import { useSearchPostsQuery } from "../../services/hn/hn.slice";
import HnPostCard from "./HnPostCard";

export const HnPostList = () => {
  const [page, setPage] = useState(0);
  const { data: postList } = useSearchPostsQuery({ page, query: "" });
  const incrementPage = () => {
    setPage(page + 1);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", margin: "0 25px" }}>
      <Grid container spacing={2}>
        {postList &&
          postList.hits.map((post) => (
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
