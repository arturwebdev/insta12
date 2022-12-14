import React, { memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IMAGES from '../../images'
import { addComment } from '../../store/slices/posts/postsSlice'
import { addNotification, selectUsers } from '../../store/slices/users/usersSlice'

function CommentInput({setIsShow,id}) {
    const formRef = useRef(null)
    const dispatch = useDispatch() 
    const {currentUser} = useSelector(selectUsers)
    // const postUserId = id.slice(id.indexOf('_') + 1)
    
    const handleSubmit = useCallback((e)=>{
        e.preventDefault()
        if (formRef.current[0].value.trim().length) {
            dispatch(addComment({
                postId: id,
                body: formRef.current[0].value,
                username: currentUser.username
    
            }))
        }

        if(id.slice(id.indexOf('_') + 1) !== currentUser.id){
            dispatch(addNotification({
                userId: id.slice(id.indexOf('_') + 1), 
                text: formRef.current[0].value,
                postId: id
            }))
        }

        formRef.current[0].value = ''
    },[])
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
        <div className="comment-wrapper">
            <img src={IMAGES.smile} className="icon" alt=""/>
            <input onFocus={()=> setIsShow(true) } type="text" className="comment-box" placeholder="Add a comment"/>
            <button className="comment-btn">post</button>
        </div>
    </form>
  )
}

export default CommentInput