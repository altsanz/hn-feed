import { useParams } from "react-router-dom";

export const HnPostDetail = () => {
  const { postId } = useParams();
  //   const navigate = useNavigate();
  //   const [postIdInvalid, setPostIdInvalid] = useState<boolean>(true);
  //   const [parsedPostId, setParsedPostId] = useState(0);
  //   const { data: post } = useGetPostByIdQuery(parsedPostId, {
  //     skip: postIdInvalid,
  //   });
  //   if (postId) {
  //     setParsedPostId(parseInt(postId, 10));
  //     setPostIdInvalid(false);
  //   } else {
  //     navigate("/");
  //   }
  return <div>{postId && JSON.stringify(postId)}</div>;
};
