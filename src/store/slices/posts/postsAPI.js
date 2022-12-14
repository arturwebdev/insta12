import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function() {
        const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
        const responseComments = await axios.get('https://jsonplaceholder.typicode.com/comments')

        const dataPosts = responsePosts.data
        const dataComments = responseComments.data
        
        const data = dataPosts.map(post => ({
            id: post.id,
            username: post.title.slice(0, post.title.indexOf(' ')),
            img: post.url,
            desc: post.title.slice(post.title.indexOf(' ') + 1),
            likesCount: Math.round(Math.random() * 1000),
            timeAgo: Math.round(Math.random() * 10) + ' minutes ago',
            comments: dataComments.filter(comment => comment.postId === post.id)
                                    .map(comment => ({
                                        id: comment.id,
                                        username: comment.name.slice(0, comment.name.indexOf(' ')),
                                        body: comment.body 
                                    }))
        }))

        return data
    }
)