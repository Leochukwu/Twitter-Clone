import React from 'react';
import "./Slidebar.css";
import XIcon from '@mui/icons-material/X';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';


const Slidebar = () => {
  return (
    <div className='slidebar'>
        {/* Twitter Icon */}
        <XIcon className='sidebar_twitterIcon'/>
        <SidebarOption active Icon={HomeIcon} text='Home'/>
        <SidebarOption Icon={SearchIcon} text='Explore'/>
        <SidebarOption Icon={NotificationsNoneIcon} text='Notification'/>
        <SidebarOption Icon={MailOutlineIcon} text='Messages'/>
        <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks'/>
        <SidebarOption Icon={ListAltIcon} text='List'/>
        <SidebarOption Icon={PermIdentityIcon} text='Profile'/>
        <SidebarOption Icon={MoreHorizIcon} text='More'/>

        {/* Button */}
        <Button variant='outlined' className='sidebar_tweet' fullWidth>Tweet</Button>

    </div>
  )
}

export default Slidebar
