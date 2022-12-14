import './MessengerChatForm.css'
import IMAGES from '../../images'
import { memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewMess, selectUsers, sendLike } from '../../store/slices/users/usersSlice'
import { withLessMore } from '../../hoc/withLessMore'


function MessengerChatForm({isShow, setIsShow}) {
	const formRef = useRef(null)
	const dispatch = useDispatch()
	const {currentUser} = useSelector(selectUsers)

	const send = useCallback((e) => {
		e.preventDefault()
		const message = formRef.current[0].value
		if(message.trim().length){
			dispatch(addNewMess({
				userId: currentUser.id,
				text: message
			}))
		}
		formRef.current[0].value = ''
		setIsShow(false)
	})

  return (
	 <form ref={formRef} onSubmit={send} className='Chat-input'>
		<input type='text' placeholder='Message...' onChange={(e) => setIsShow(!!e.target.value)}/>
		{ 
			isShow ?
			<label>
				<input type="submit" style={{display: 'none'}} />
				<img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-share-icon.png" alt="" />
			</label>
			
			:

			<span onClick={() => dispatch(sendLike({userId: currentUser.id, url: 'https://www.freeiconspng.com/thumbs/heart-png/heart-png-15.png'}))} 
				style={{border: 'none', background: 'none'}}>
				<img src={`https://www.freeiconspng.com/thumbs/heart-png/heart-png-15.png`} alt=''/>
			</span>
		}
	 </form>
  )
}

export default memo(withLessMore(MessengerChatForm))
