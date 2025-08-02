import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthLayout, Login } from './Components/index.js'

import AddPost from './Pages/AddPost.jsx'
import AllPosts from './Pages/AllPosts.jsx'
import EditPost from './Pages/EditPost.jsx'
import Signup from './Pages/Signup.jsx'
import Home from './Pages/Home.jsx'
import Post from './Pages/Post.jsx'

const  router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/login',
        element:(
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path:'/signup',
        element:(
          <AuthLayout authentication={false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path:'/all-posts',
        element:(
          <AuthLayout authentication={true}>
            {" "}
            <AllPosts/>
          </AuthLayout>
        )
      },
      {
        path:'add-post',
        element:(
          <AuthLayout authentication={true}>
            {" "}
            <AddPost/>
          </AuthLayout>
        )
      },
      {
        path:'/edit-post/:slug',
        element:(
          <AuthLayout authentication={true}>
            {" "}
            <EditPost />
          </AuthLayout>
        )
      },
      {
        path:'/post/:slug',
        element:( 
          <AuthLayout authentication={true} >
            <Post />
          </AuthLayout>
      )
      }
    ]
  }
])
console.log("🌱 React app starting");
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       <RouterProvider router={router } />
    </Provider>
  </StrictMode>,
)
console.log("✅ ReactDOM.render() called");