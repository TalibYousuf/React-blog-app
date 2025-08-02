import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state)=>state.auth.
  status) //checking if the user is logged in by getting status from redux store
  const navigate = useNavigate()
  const navItems = [
    {
      name:"Home",
      slug:"/",
      active:true
    },
    {
      name:"Login",
      slug:"/login",
      active:!authStatus
    },
    {
      name:"Signup",
      slug:"/signup",
      active:!authStatus
    },
    {
      name:"All Posts",
      slug:"/all-posts",
      active:authStatus,
    },
    {
      name:"Add Post",
      slug:"/add-post",
      active:authStatus
    }
  ]
  return (
    <header className='py-3 shadow bg-gradient-to-r from-purple-300 to-purple-400 rounded'>
      <Container>
        <nav className='flex'>
          <div className='mr-4 '>
            <Link to='/'>
            <Logo width='70px' />

            </Link>
          </div>
          <ul className='flex ml-auto space-x-2'>
            {navItems.map((item)=>
            item.active ? (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.slug)}
                className='inline-block px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 '
              >
                {item.name}
              </button>
            </li>
            ): null
          )}
          {authStatus && (
            <li>
              <LogoutBtn className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition-colors duration-200" />
            </li>
          )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
