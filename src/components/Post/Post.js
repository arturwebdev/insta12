import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { withLessMore } from '../../hoc/withLessMore'
import IMAGES from '../../images'
import CommentInput from '../CommentInput/CommentInput'
import Comments from '../Comments/Comments'

function Post({isShow, setIsShow,id, img, name, likesCount, postText, timeAgo, comments}) {
  return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                <div className="profile-pic"><img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'} alt="" /></div>
                <p className="username">{name}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
                <img src={IMAGES.save} className="save icon" alt=""/>
            </div>
            <p className="likes">{likesCount}</p>
            {postText && <p className="description"><span>{name} </span> {postText}</p>}
            <p className="post-time">{timeAgo}</p>
            {
                isShow ? <Comments comments={comments} /> : comments.length ? <h2 style={{cursor: 'pointer'}} onClick={() => setIsShow(true)}>See comments</h2> : <></>
            }
        </div>
        <CommentInput setIsShow={setIsShow} id={id}/>
    </div>
  )
}

export default memo(withLessMore(Post))