import React, { useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid } from 'semantic-ui-react';
import AudioPlayer from 'react-h5-audio-player';
import { getPlaylistTracks } from './../../actions/playlist';

import 'react-h5-audio-player/lib/styles.css';
import './viewPlaylist.css';

function ViewPlaylist(props) {
    // redirect to home page when site opens from playlist page 
    let playlistInfo = (props.location.state !== undefined) ? props.location.state.playlist : props.history.push('/');
    const {
        playlistTracksList
    } = useSelector(state => ({
        playlistTracksList: state.playlist.playlistTracks,
    }));
    const dispatch = useDispatch();
    const [width, setWidth] = useState(0);
    let columnSize = (width <= 432) ? 1 : 2;

    const updatePageWidth = () => {
        setWidth(window.innerWidth);
    }
    useLayoutEffect(() => {
        dispatch(getPlaylistTracks(playlistInfo.id));
        updatePageWidth();
        window.addEventListener('resize', updatePageWidth);
        updatePageWidth();
        return () => window.removeEventListener('resize', updatePageWidth);
    }, [props, playlistInfo, dispatch]);
    console.log(playlistTracksList);
    return (
        <div className={"main-body playlist"}>
            <h1>{playlistInfo.title}</h1>
            {
                playlistTracksList !== null ?
                    <Grid columns={columnSize}>
                        <Grid.Column>
                            <div>
                                <img src={playlistTracksList[0].album.cover_big} alt="music-icon" className="track-img" />
                                <AudioPlayer
                                    autoPlay
                                    src={playlistTracksList[0].preview}
                                    onPlay={e => console.log("onPlay")}
                                />
                                <br />
                            </div>
                            <div>
                                <p>comments here</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column className="more-tracks">
                            {
                                playlistTracksList.map(item => (
                                    <div key={item.id}>
                                        <img src={item.album.cover_medium} alt="music-icon" />
                                    </div>
                                ))
                            }

                        </Grid.Column>
                    </Grid>
                    : null
            }

        </div>
    )
}

export default ViewPlaylist;