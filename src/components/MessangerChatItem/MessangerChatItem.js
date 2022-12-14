import React, { memo } from 'react';
import './MessangerChatItem.css'

function MessangerChatItem({id, text, person, url}){
    
    return(
        <div className={person === 'Me' ? "my-text-div" : "friend-text-div"}>
            <div className={person === 'Me' ? "my-text-container" : "friend-text-container"}>
                {
                    text ? <div className={person === 'Me' ? "my-text" : 'friend-text'}>{text}</div> :
                        <img style={{width: '100px', height: 'auto'}} src={url} alt="" />
 
                }
                
            </div>
        </div>
    )
    
    
}

export default memo(MessangerChatItem)
