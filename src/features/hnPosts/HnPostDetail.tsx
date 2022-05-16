import { useParams } from "react-router-dom";

export const HnPostDetail = () => {
  const params = useParams();
  return <div>{JSON.stringify(params.postId)}</div>;
};
