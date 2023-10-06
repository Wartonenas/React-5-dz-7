import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, fetchPost} from "../store/postSlice";

const ReadPost = () => {
	const { items, loading, error } = useSelector((state) => state.post)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPost());
	}, [dispatch]);

	const handleDelete = (postId) => {
		dispatch(deletePost(postId))
	}

	if (loading) return <p>Loading...</p> // в другом месте не работает
	if (error) return <p>{error}</p>; // так же

	return (
		<div>
			<h1>Read Post</h1>
			<ul>
				{items && items.map((post) =>
					<li key={post.id}>
						<h2>{ post.id }</h2>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
						<button onClick={() =>handleDelete(post.id)}>Удалить</button>
					</li>)}
			</ul>
		</div>
	)
}

export default ReadPost;