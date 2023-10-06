import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../store/postSlice";

const CreatePost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createPost({ title, body, userId: 1 })
    );
    setTitle("");
    setBody("");
  };
  
  return (
    <div>
      <h2>Create Posts</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="text" name="body" value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default CreatePost