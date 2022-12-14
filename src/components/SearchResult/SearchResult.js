import React, { memo, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './SearchResult.css'

function SearchResult({id, username}) {

  return (
    <>
      <NavLink to={`${id}/uniq`} style={{textDecoration:'none'}} className="profile-card">
        <div className="profile-pic">
            <img src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`} alt=""/>
        </div>
        <div>
            <p className="username">{username}</p>
        </div>
      </NavLink>
    </>
  )
}

export default memo(SearchResult)