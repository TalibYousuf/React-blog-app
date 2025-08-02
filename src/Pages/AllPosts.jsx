import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/Config'
import {Container, PostCard} from '../Components'

function AllPosts() {

    const [posts,setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                { posts.length > 0 ? (
                posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard
                        $id={post.$id}
                        title={post.title}
                        featuredImage={post.featuredImage}
                        />
                        </div>
                ))
            ):(
                <p className="text-center text-gray-500 col-span-full mt-4">
                    No posts found. Try adding one!
                </p>  
            )}

            </div>
        </Container>
      
    </div>
  )
}

export default AllPosts
