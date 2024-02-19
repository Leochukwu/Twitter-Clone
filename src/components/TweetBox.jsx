import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import { db } from "../firebase"
import { addDoc, collection } from 'firebase/firestore';



const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const tweetsListRef = collection(db, 'posts');




  const sendTweet = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    try {
      await addDoc(tweetsListRef, {
        displayName: 'Chukwu Godwin',
        username: 'leochukwu',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
      });
      
      // Clear the input fields after sending the tweet
      setTweetMessage("");
      setTweetImage("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox_input">
          <Avatar
            src="https://media.licdn.com/dms/image/D4D03AQGNtMtWUWulRw/profile-displayphoto-shrink_200_200/0/1705239022325?e=1710979200&v=beta&t=U-plKlS5pW01f6XNjwJZV73pEBgh586eJY1PND0J1Ak"
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className='tweetBox_imageInput'
          placeholder='Optional: Enter Image URL'
          type='text'
        />
        
        <Button onClick={sendTweet} type='submit' className='tweetBox_tweetButton'>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
