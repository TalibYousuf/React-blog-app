import React from 'react'
import appwriteService from '../appwrite/Config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  //  //this  Prevents rendering if data is incomplete
  // if (!$id || !title) return null;
  // console.log("Rendering PostCard with ID:", $id, "Title:", title, "Image:", featuredImage);
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200'>
            <div className='w-full h-33 mb-4 overflow-hidden rounded-xl'>
                {featuredImage && (
                    <img src={appwriteService.getFileView(featuredImage)} alt={title} className='rounded-xl' />
                )}

            </div>
            <h2 className='text-xl font-semibold text-purple-500 hover:text-purple-500 transition-colors duration-200'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard
