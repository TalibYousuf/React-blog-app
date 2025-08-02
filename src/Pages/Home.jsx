// import React,{useEffect,useState} from 'react'
// import appwriteService from '../appwrite/Config'
// import { Container,PostCard } from '../Components'

// function Home() {

//     const [posts,setPosts] = useState([])
//     useEffect(()=>{
//         appwriteService.getPosts().then((posts)=>{
//             if(posts){
//                 setPosts(posts.documents);
//             }
//         })
//     },[])
   

//     if(posts.length === 0){
//         return (
//             <div className='w-full py-8 mt-4 text-center'>
//                 <Container>
//                     <div className='flex flex-wrap'>
//                         <div className='p-2 w-full'>
//                             <h1 className='text-2xl font-bold hover:text-gray-500'>
//                                 Login to read posts
//                             </h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         )

//     }
//     return (
//         <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post) => (
//                     <div key={post.$id} className='p-2 w-1/4'>
//                     <PostCard {...post} />
//                     </div>
//                 ))}
//                 </div>
//             </Container>
//         </div>
//     )
// }

// export default Home

import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/Config';
import { Container, PostCard } from '../Components';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);  // ✅ add loading
  const [error, setError] = useState(false);     // ✅ add error state

  useEffect(() => {
    appwriteService.getPosts()
      .then((posts) => {
        console.log("📦 Posts fetched:", posts);
        if (posts?.documents?.length > 0) {
          setPosts(posts.documents);
        }
      })
      .catch((err) => {
        console.error("❌ Failed to fetch posts:", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className='w-full py-8 mt-4 text-center'>
        <Container>
          <h1 className='text-2xl font-semibold text-gray-500'>Loading posts...</h1>
        </Container>
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div className='w-full py-8 mt-4 text-center'>
        <Container>
          <div className='flex flex-wrap'>
            <div className='p-2 w-full'>
              <h1 className='text-2xl font-bold hover:text-gray-500'>
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;