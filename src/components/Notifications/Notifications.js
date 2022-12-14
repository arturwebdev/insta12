import './Notifications.css'
import IMAGES from '../../images'
import { useSelector } from 'react-redux'
import NotificationItem from '../NotificationItem/NotificationItem'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { selectPosts } from '../../store/slices/posts/postsSlice'
function Notifications() {
	const {currentUser} = useSelector(selectUsers)
	const notifications = currentUser.notifications
  return (
	 <div className='Notification'>
		<div className='Notification-body'>
			<h1>Notification</h1>
			<div className='Notic-this'>
				<h2>This Week</h2>
				{
					notifications?.map(el => <NotificationItem key={el.id} text={el.text} postId={el.postId} username={el.username} />)
				}
			</div>
		</div>
	 </div>
  )
}

export default Notifications
