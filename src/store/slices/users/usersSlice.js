import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersData: [],
        currentUser: null
    },
    reducers: {
        toggleCurrentUser (state, {payload}) {
            const currentUser = state.usersData.find(user => (user.email === payload.login || user.username === payload.login) && user.password === payload.password)
            if(currentUser?.id)state.currentUser = currentUser
        },
        logOut(state, {payload}){
            state.currentUser = null
        },
        addNewMess(state, {payload}){
            const {userId, text} = payload
            let answer = ''
            switch(text.toLowerCase()){
                case 'barev':
                    answer = 'barev'
                    break;
                case 'vonc es':
                    answer = 'lav du?'
                    break;
                case 'inch ka':
                    answer = 'ban che du asa'
                    break;
                default:
                    answer = 'es dzez chem haskanum'
            }

            const messages = [
                {
                    id:new Date().getTime() + 'user',
                    text: text,
                    person: 'Me'
                },
                {
                    id:new Date().getTime() + 'bot',
                    text: answer,
                    person: 'Bot'
                }
            ]

            const userIdx = state.usersData.findIndex(user => user.id === userId)
            state.currentUser.messages.push(...messages)
            state.usersData[userIdx].messages.push(...messages)
        },
        sendLike(state, {payload}){
            const {userId, url} = payload

            const messages = [
                {
                    id:new Date().getTime() + 'user',
                    url: url,
                    person: 'Me'
                },
                {
                    id:new Date().getTime() + 'bot',
                    url: url,
                    person: 'Bot'
                }
            ]

            const userIdx = state.usersData.findIndex(user => user.id === userId)
            state.currentUser.messages.push(...messages)
            state.usersData[userIdx].messages.push(...messages)
        },
        createPost(state, {payload}){
            const {userId, id, desc, img, username } = payload
            
            const userIdx = state.usersData.findIndex(user => user.id === userId)
           
            const currentPost = {
                id: id,
                username: username,
                img: img,
                desc: desc,
                likesCount: Math.round(Math.random() * 1000),
                timeAgo: Math.round(Math.random() * 10) + ' minutes ago',
                comments: []
            }
            
            state.currentUser.posts.unshift(currentPost)
            state.usersData[userIdx].posts.unshift(currentPost)
        },
        delPost(state, {payload}){
            const userId = payload.slice(payload.indexOf('_') + 1)
            const userIdx = state.usersData.findIndex(user => user.id === userId)

            state.currentUser.posts = state.currentUser.posts.filter(post => post.id !== payload)
            state.usersData[userIdx].posts = state.usersData[userIdx].posts.filter(post => post.id !== payload)
        },
        addNotification(state, {payload}){
            const {userId, text, postId} = payload
            const userIdx = state.usersData.findIndex(user => user.id === userId)
            const username = state.usersData[userIdx].username

            const initialNotification = {
                id: new Date().getTime().toString(),
                userId: userId,
                text: text,
                postId: postId,
                username: state.currentUser.username
            }
            state.usersData[userIdx].notifications.unshift(initialNotification)
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, {payload}) => {
            return{
                ...state,
                usersData: [...payload]
            }
        },
        [fetchUsers.rejected]: (state, {payload})=>{
            console.log('err')
        }
    }
})

export const selectUsers = state => state.users

export const {toggleCurrentUser, logOut, addNewMess, sendLike, createPost, delPost, addNotification} = usersSlice.actions

export const usersReducer = usersSlice.reducer