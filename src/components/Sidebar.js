import React from 'react'
import '../styles/Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicSharpIcon from '@mui/icons-material/LibraryMusicSharp';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
const [{playlists}, dispatch]= useDataLayerValue();

  return (
    <div className='sidebar'>
        <img
        className='sidebar__logo'
         src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt=''/>
         <SidebarOption Icon={HomeIcon}title='Home'/>
         <SidebarOption Icon={SearchIcon}title='Search'/>
         <SidebarOption Icon={LibraryMusicSharpIcon}title='Your Library'/>
         <br />
         <strong className='sidebar__title'>Play Lists</strong>
         <hr />
         {playlists?.items?.map((playlist, index) =>
            <SidebarOption  key={index} title={playlist.name}/>
         )}
    </div>
  )
}

export default Sidebar