import { memo } from 'react'
import MessengerChat from '../MessengerChat/MessengerChat'
import MessengerChatForm from '../MessengerChatForm/MessengerChatForm'
import './MessengerChatSection.css'

function MessengerChatSection({messages}) {
  return (
	 <div className='Messenger-right-col'>
		<div className='UserSction'>
			<p>{messages[0].name}</p>
			<p>i</p>
		</div>
		<div className='Chat'>
			<MessengerChat />
		</div>
		<MessengerChatForm />
	 </div>
  )
}

export default memo(MessengerChatSection)
