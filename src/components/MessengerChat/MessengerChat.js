import { memo, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import MessangerChatItem from '../MessangerChatItem/MessangerChatItem'
import './MessengerChat.css'

function MessengerChat() {
  const {currentUser} = useSelector(selectUsers)
  const divRef = useRef(null)

  useEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight - divRef.current.clientHeight;
  }, [currentUser?.messages]);
  return (
	 <div ref={divRef} className="MessengerChat">
    {
      currentUser?.messages.map(el => <MessangerChatItem key={el.id} {...el} />)
    }
	 </div>
  )
}

export default memo(MessengerChat)
