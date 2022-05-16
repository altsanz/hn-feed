import { Grid } from "@mui/material";
import { useSearchPostsQuery } from "../../services/hn/hn.slice";
import HnPostCard from "./HnPostCard";

export const HnPostList = () => {
  const { data: postList } = useSearchPostsQuery({ page: 0, query: "" });

  return (
    <Grid container spacing={2}>
      {postList &&
        postList.hits.map((post) => (
          <Grid item xs={12} md={4}>
            <HnPostCard post={post} key={post.objectID}></HnPostCard>
          </Grid>
        ))}
    </Grid>
  );
};
