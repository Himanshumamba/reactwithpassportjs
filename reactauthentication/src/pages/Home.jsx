import React from 'react'
 import { posts } from '../data'
import Cards from '../components/Cards'
const Home = () => {
  return (
    <div className='home'>
 {posts.map((data)=>(
<Cards  key = {data.id}post ={data}/>
 ))}
    </div>
  )
}

export default Home
