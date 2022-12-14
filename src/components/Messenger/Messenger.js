import './Messenger.css'
import MessengerPeoplesMessages from '../MessengerPeoplesMessages/MessengerPeoplesMessages';
import MessengerChatSection from '../MessengerChatSection/MessengerChatSection';
import IMAGES from '../../images';
import { memo } from 'react';


function Messenger() {
	const messages = [
		{
			 id: '1',
			 img: IMAGES.cover1,
			 name: 'chat_bot',
			 active: 'Active'
		},
  ]
  return (
	 <div className='Messenger'>
		<div className='Messenger-auto'>
			<div className='Messenger-left-col'>
				<div className='Messenger-left-col-direct'>
					<p>Direct</p>
					<i className="fa-duotone fa-pen-to-square"></i>
				</div>
				<div className='Messenger-left-col-peoples'>
					<div className='Primary-General'>
						<p>Primary</p>
						<p>General</p>
					</div>
					<MessengerPeoplesMessages messages={messages} />
				</div>
			</div>
				<MessengerChatSection messages={messages}/>
		</div>
	 </div>
  )
}

export default memo(Messenger)
