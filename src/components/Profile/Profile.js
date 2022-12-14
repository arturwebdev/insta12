import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../../store/slices/posts/postsSlice';
import { selectUsers } from '../../store/slices/users/usersSlice';
import ProfileBody from '../ProfileBody/ProfileBody';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import './Profile.css'

function Profile() {
    const {currentUser} = useSelector(selectUsers)
    const dispatch = useDispatch()
    return (
        <>
        <ProfileHeader currentUser={currentUser} />
    
        <div className="container">
            <div className="gallery">
        {
            currentUser?.posts.map(el => <ProfileBody key={el.id} id={el.id} img={el.img} likesCount={el.likesCount} />)
        }
        </div>
        </div>
    
        </>
    );
}

export default Profile;
