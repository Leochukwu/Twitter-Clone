import React from 'react';
import './TweetBox.css';
import { Avatar, Button} from '@mui/material';

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox_input">
          <Avatar
            src="https://lh3.googleusercontent.com/a/ACg8ocKVZT2-Jj9lqrwlOdS5NBN2pAD0Azwk-u0nBJ35e4Rh8BghFw4RLTCWRFdqqraNuC0VpHzFvnchIH4L10Fk2088RA=s288-c-no"
            alt="Chukwu Godwin"
            id="ember33"/>
          <input placeholder="What's happening?" type ='text' />
          
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
