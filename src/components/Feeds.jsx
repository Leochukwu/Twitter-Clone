import React, { useEffect, useState } from 'react'
import "./Feeds.css"
import TweetBox from './TweetBox'
import Post from './Post'

const Feeds = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
  
  })
  return (
    <div className="feed">
      {/* Header */}

        <div className="feeds_header">
        <h2>Home</h2>

        </div>

      {/* Tweet Box */}
      <TweetBox/>


      {posts.map(post => (

      <Post displayName={post.displayName}
      username={post.username}
      verified={post.verified}
      text={post.text}
      avatar={post.avatar}
      image={post.image}
      />
      ))}


    </div>
  )
}

export default Feeds
