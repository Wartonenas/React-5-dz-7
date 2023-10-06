import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk(
	"post/fetchPost",
	async () => {
		const resp = await axios.get('https://dummyjson.com/posts?limit=15')
		return resp.data.posts
	}
)

export const createPost = createAsyncThunk(
	"post/createPost",
	async (newPost) => {
		const resp = await axios.post(
			'https://dummyjson.com/posts/add',
			newPost
		);
		return resp.data;
	}
);

export const deletePost = createAsyncThunk(
	"post/deltePost",
	async (postId) => {
		await axios.delete(`https://dummyjson.com/posts/${postId}`)
		return postId
	}
)

const postSlice = createSlice({
	name: 'post',
	initialState: {
		items: [],
		loading: false,
		error: ""
	},
	reducers: [],
	extraReducers: (builder) => {
		builder
			.addCase(fetchPost.pending, (state) => {
				state.loading = true;
				state.error = ""
			})
			.addCase(fetchPost.fulfilled, (state, action) => {
				state.loading = false;
				state.error = "";
				state.items = action.payload
			})
			.addCase(fetchPost.rejected, (state, action) => {
				state.error = action.error.message;
				state.loading = false
			})
			.addCase(createPost.pending, (state) => {
				state.loading = true
				state.error = ""
			})
			.addCase(createPost.fulfilled, (state, action) => {
				state.items.push(action.payload)
				state.loading = false
			})
			.addCase(createPost.rejected, (state, action) => {
				state.error = action.error.message;
				state.loading = false
			})
			.addCase(deletePost.pending, (state) => {
				state.loading = true;
			})
			.addCase(deletePost.fulfilled, (state, action) => {
				state.loading = false;
				state.items = state.items.filter((post) => post.id !== action.payload);
			})
			.addCase(deletePost.rejected, (state, action) => {
				state.error = action.error.message;
				state.loading = false
			});
	}
})

export const postAction = postSlice.actions
export const postReducer = postSlice.reducer