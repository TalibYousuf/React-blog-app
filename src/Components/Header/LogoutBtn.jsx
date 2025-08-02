import React from 'react'
import {useDispatch} from 'react-redux'
import  AuthService  from '../../appwrite/Auth'
import {logout} from '../../Store/AuthSlice'


function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        AuthService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors duration-200'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn
