import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { resetSearch } from '../../store/slices/search/searchSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './UniqItem.css'

function UniqItem() {
    const {id} = useParams()
    const {usersData} = useSelector(selectUsers)
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        setUser(usersData.find(el => el.id === id))
        dispatch(resetSearch())
    }, []);

  return (
    <>
    <header>
        <div className="container">
            <div className="profile">
                <div className="profile-image">
                    <img src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`} alt=""/>
                </div>
                <div className="profile-user-settings">
                    <h1 className="profile-user-name">{user?.username}</h1>
                </div>
                <div className="profile-stats">
                    <ul>
                        <li><span className="profile-stat-count">{user?.posts.length}</span> posts</li>
                        <li><span className="profile-stat-count">{user?.followers}</span> followers</li>
                        <li><span className="profile-stat-count">{user?.following}</span> following</li>
                    </ul>
                </div>
                <div className="profile-bio">
                    <h4>{user?.name}</h4>
                    <p>{user?.desc}</p>
                    <button className='followBtn'>follow</button>
                </div>
            </div>
        </div>
    </header>

    <div className="container">
        <div className="gallery">
    {
        user?.posts.map(el => (
            <div key={el.id} className="gallery-item">
				<img src={el.img} className="gallery-image" alt=""/>
				<div className="gallery-item-info">
					<ul>
						<li className="gallery-item-likes"><span >Likes</span> {el.likesCount}</li>
						{/* <li className="gallery-item-comments"><span >Comments</span> {el.commentsCount}</li> */}
					</ul>
				</div>
			</div>
        ))
    }
    </div>
    </div>

    </>
  )
}

export default memo(UniqItem)