import { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './NotificationItem.css'

function NotificationItem({postId, text, username}) {
	const {currentUser} = useSelector(selectUsers)
	const postIdx = currentUser.posts.findIndex(post => post.id === postId)
	const post = currentUser.posts[postIdx]
  return (
	 <div className='NotificationItem'>
		<div className='NotificationItem-body'>
			<div className="status-card">
				<div className="profile-pic">{<img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' alt=""/>}</div>
			</div>
			<div>
				<span><b>{username} </b></span>commented your photo: <i> "{text}"</i>
			</div>
		</div>
		
		<img src={post?.img} style={{width: '100px', height:'auto'}} alt="" />
	 </div>
  )
}

export default memo(NotificationItem)
