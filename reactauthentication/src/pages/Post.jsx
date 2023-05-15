import React from 'react'
import { posts } from '../data'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Post = () => {

  const location = useLocation()
const path = location.pathname.split("/")[2];
const  singlePost = posts.find(p=>p.id.toString() === path)
  return (
    <div className='post_item'>
          <Link to ="/" class="previous">&#8249; </Link>
      <img src={singlePost.img} alt="postImage" className='postImage'/>
      <h1 className="p_title">{singlePost.title}</h1>
      <p className="postdesc"> {singlePost.desc}</p>
      <p className="postlongdesc"> {singlePost.longDesc}</p>
    </div>
  )
}

export default Post
