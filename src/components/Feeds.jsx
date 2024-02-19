import React, { useEffect, useState } from 'react'
import "./Feeds.css"
import TweetBox from './TweetBox'
import Post from './Post'
import { db } from "../firebase"
import { getDocs, collection } from "firebase/firestore"
import FlipMove from 'react-flip-move'


function Feeds() {
  const [tweetlist, setTweetList] = useState([]);

  useEffect(() => {
    const getTweetsList = async () => {
      try {
        const tweetsListRef = collection(db, "posts");
        const querySnapshot = await getDocs(tweetsListRef);
        const tweets = [];
        querySnapshot.forEach((doc) => {
          tweets.push(doc.data());
        });
        setTweetList(tweets);
      } catch (error) {
        console.error(error);
      }
    };

    getTweetsList();
  }, []);

  return (
    <div className="feed">
      <div className="feeds_header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>

      {tweetlist.map((post, index) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
      </FlipMove>
    </div>
  );
}

export default Feeds;
