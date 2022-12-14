import './Login.css'
import IMAGES from '../../images'
import { Link, useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers, toggleCurrentUser } from '../../store/slices/users/usersSlice'
import { fetchUsers } from '../../store/slices/users/usersAPI'


function Login() {
	const formRef = useRef(null)
    const navigate = useNavigate()
    const {usersData, currentUser} = useSelector(selectUsers)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(!usersData.length){
            dispatch(fetchUsers())

        }
    }, []);

    useEffect(()=>{
        if (currentUser?.id) navigate('/')
    },[currentUser])
	
    const handleSubmit = useCallback((e) => {
		e.preventDefault()
        dispatch(toggleCurrentUser({
            login: formRef.current[0].value,
            password: formRef.current[1].value
        }))

		formRef.current.reset()
	}
	)

  return (
	 <div className='Login'>
		<div className='Login-form'>
			<div >
				<img src={IMAGES.logo} className='brand-img-login'  alt="" />
			</div>
		    <form ref={formRef} onSubmit={handleSubmit}>
				<div className='login-input'>
					<input defaultValue={'bret'} type='text' placeholder='Phon number,username or email'/>
				</div>
				<div className='login-input'>
					<input defaultValue={'gwenborough'} type='text' placeholder='Password'/>
				</div>
				<div className='login-btn'>
					<button >Log in</button>
				</div>
			</form>
				<div>
					<Link style={{textDecoration: 'none',color: 'rgb(91, 159, 182)'}}>Forgot password?</Link>
				</div>
		</div>
		<div className='to-reg'>
			Don't have an account? <Link> Sign up</Link>
		</div>

	 </div>
  )
}

export default Login
