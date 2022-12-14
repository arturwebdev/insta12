import React, { memo } from 'react'

function Comments({comments}) {
  return (
    <>
        {
            comments.map(comment => (
                <p key={comment.id} className="description"><span>{comment.username} </span> {comment.body}</p>
            ))
        }
    </>
  )
}

export default memo(Comments)