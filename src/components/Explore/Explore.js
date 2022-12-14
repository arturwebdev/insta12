import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectPosts } from '../../store/slices/posts/postsSlice'
import ExploreItem from '../ExploreItem/ExploreItem'
import './Explore.css'

function Explore() {

	const posts = useSelector(selectPosts)
  return (
	 <div className='container Explore'>
		<div className='gallery'>
			{
				posts.map(el => <ExploreItem key={el.id} img={el.img} likes={el.likesCount} commentsCount={el.comments.length} />)
			}
		</div>
	 </div>
  )
}

export default Explore
