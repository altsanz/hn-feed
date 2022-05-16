import { useSearchPostsQuery } from "../../services/hn/hn.slice";



export const HnPostList = () => {
    const { data: postList } = useSearchPostsQuery({ page: 0, query: ''});


    return <ul>{postList && postList.hits.map(post => <li key={post.objectID}>{ post.title}</li>)}</ul>
}