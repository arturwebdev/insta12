import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addComment(state, {payload}){
            const postIdx = state.findIndex(post => post.id === payload.postId)
            state[postIdx].comments.push({
                id: new Date().getTime(),
                username: payload.username,
                body: payload.body  
            })
        },
        deletePost(state, {payload}){
            console.log(payload)
            return [
                ...state.filter(post => post.id !== payload)
            ]
        },
        addPost(state, {payload}){
            const {id, desc, img, username } = payload

            const currentPost = {
                id: id,
                username: username,
                img: img,
                desc: desc,
                likesCount: Math.round(Math.random() * 1000),
                timeAgo: Math.round(Math.random() * 10) + ' minutes ago',
                comments: []
            }
            state.unshift(currentPost)
        },
        deletePostFromAllPosts(state, {payload}){
            return[...state.filter(post => post.id !== payload)]
        }
    },
    extraReducers: {
        [fetchPosts.fulfilled]:(state, {payload}) => {
            return[...payload]
        }
    }
})

export const selectPosts = state => state.posts

export const {addComment, deletePost, addPost, deletePostFromAllPosts} = postsSlice.actions

export const postsReducer = postsSlice.reducer 