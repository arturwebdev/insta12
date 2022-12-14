import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePostFromAllPosts } from '../../store/slices/posts/postsSlice';
import { delPost } from '../../store/slices/users/usersSlice';

function ProfileBody({id, img, likesCount}){
    const dispatch = useDispatch()
    return (
        <div className="gallery-item">
            <img src={img} className="gallery-image" alt=""/>
            <div className="gallery-item-info">
                <span onClick={() => {
                    dispatch(deletePostFromAllPosts(id))
                    dispatch(delPost(id))
                    }}>X</span>
                <ul>
                    <li className="gallery-item-likes"><span >Likes</span> {likesCount}</li>
                    {/* <li className="gallery-item-comments"><span >Comments</span> {el.commentsCount}</li> */}
                </ul>
            </div>
        </div>
    );
}

export default ProfileBody;
