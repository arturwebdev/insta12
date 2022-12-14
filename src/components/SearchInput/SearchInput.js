import React, { memo, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IMAGES from '../../images'
import { selectSearch, toggleSearch } from '../../store/slices/search/searchSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import SearchResult from '../SearchResult/SearchResult'
import './SearchInput.css'

function SearchInput() {
    const search = useSelector(selectSearch)
    const dispatch = useDispatch()

    const {usersData} = useSelector(selectUsers)

    const filteredUsers = useMemo(()=> {
        return usersData.filter(el => el.username.includes(search)).slice(0,5)
    },[search])

  return (
    <>
        <input type="text" value={search} onChange={(e) => dispatch(toggleSearch(e.target.value)) } className="search-box" placeholder="search"/>
        <div style={{display: search ? '' : 'none'}} className='search-info'>
            {
                filteredUsers.length ?
                filteredUsers.map(el => <SearchResult key={el.id} id={el.id} username={el.username}/>) : <h3>No Result</h3>
            }
        </div>
    </>
    
  )
}

export default memo(SearchInput)