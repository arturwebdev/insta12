import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../images';
import { addPost } from '../../store/slices/posts/postsSlice';
import { createPost, selectUsers } from '../../store/slices/users/usersSlice';
import './CreatePost.css'
function CreatePost() {
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const {currentUser} = useSelector(selectUsers)
    const navigate = useNavigate()
 
 
    const handleSubmit = (e) => {
        e.preventDefault()
        let img = formRef.current[0].value
        let desc = formRef.current[1].value
        let postId = new Date().getTime() + '_' + currentUser.id

        if(img){
            dispatch(addPost({id:postId, desc, img, username: currentUser.username}))
            dispatch(createPost({userId: currentUser.id, id: postId, desc, img, username: currentUser.username}))
            navigate('/')
        }
        formRef.current.reset()
    }
    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            <form ref={formRef} onSubmit={handleSubmit} style={{marginTop: '50px'}}>
                <h2>Url</h2>
                <input className='input' type="text" placeholder="Url" />
                <h2>Description</h2>
                <input className='input' type="text" placeholder="Description" />
                <input className='input' type="submit" defaultValue="Submit" />
            </form>
        </div>
    );
}

export default CreatePost;
