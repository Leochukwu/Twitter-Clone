import React from 'react';
import './TweetBox.css';
import { Avatar, Button} from '@mui/material';

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox_input">
          <Avatar
            src="https://media.licdn.com/dms/image/D4D03AQGNtMtWUWulRw/profile-displayphoto-shrink_200_200/0/1705239022325?e=1710979200&v=beta&t=U-plKlS5pW01f6XNjwJZV73pEBgh586eJY1PND0J1Ak"/>
          <input placeholder="What's happening?" type ='text' />
        </div>
        <input className='tweetBox_imageInput' placeholder='Enter Image URL' type='text'/>
        <Button className='tweetBox_tweetButton'>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
