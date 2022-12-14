import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function() {
        const responseUsers = await axios.get('https://jsonplaceholder.typicode.com/users')
        const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500')

        const dataUsers = responseUsers.data
        const dataPosts = responsePosts.data

        const data = dataUsers.map(user => ({
            id: user.id.toString(),
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            name: user.name,
            desc: user.company.catchPhrase,
            followers: Math.round(Math.random() * 700),
            following: Math.round(Math.random() * 700),
            messages: [],
            password: user.address.city.toLowerCase(),
            notifications: [],
            posts: dataPosts.filter(post => post.albumId === user.id)
                            .map(post => ({
                                id: post.id + '_' + user.id,
                                username: user.username,
                                img: post.url,
                                desc: post.title.slice(post.title.indexOf(' ') + 1),
                                likesCount: Math.round(Math.random() * 1000),
                                timeAgo: Math.round(Math.random() * 10) + ' minutes ago',
                                comments: []
                            }))
            
        }))

        return data
    }
)