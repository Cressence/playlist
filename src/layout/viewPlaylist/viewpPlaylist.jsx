import React from 'react';
import Navbar from './../../component/navbar/navbar';

function ViewPlaylist(props) {
    const playlistInfo = props.location.state.playlist;
    console.log(playlistInfo)
    return (
        <div className={"main-body"}>
            <Navbar />
            
        </div>
    )
}

export default ViewPlaylist;