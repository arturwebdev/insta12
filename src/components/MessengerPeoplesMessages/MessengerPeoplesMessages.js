import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import { memo } from 'react'

function MessengerPeoplesMessages({messages}) {
	
  return (
	 <div className='Messenger-left-col-peoples-messages'>
		{
			messages.map(el => <MessengerPeoplesMessage key={el.id} img={el.img} name={el.name} active={el.active}/>)
		}
	 </div>
  )
}

export default memo(MessengerPeoplesMessages)
