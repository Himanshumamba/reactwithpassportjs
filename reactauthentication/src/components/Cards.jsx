import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({post}) => {
  return (
    <div className='card'>
      <Link className="card_item" to ={`/post/${post.id}` }>
      <span className="title">{post.title}</span>
      <img src ={post.img}  alt ="imagePost"className="img_post"/>
      <p className="post_desc">{post.desc}</p>
      <p className="post_desclong">{post.longDesc}</p>
   <button className='submit'> Read More</button>
   </Link>
    </div>
  )
}

export default Cards
