import React, { useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Loader } from 'semantic-ui-react';
import AudioPlayer from 'react-h5-audio-player';
import { getPlaylistTracks, getPlaylistComments } from './../../actions/playlist';

import 'react-h5-audio-player/lib/styles.css';
import './viewPlaylist.css';

function ViewPlaylist(props) {
    // redirect to home page when site opens from playlist page 
    let playlistInfo = (props.location.state !== undefined) ? props.location.state.playlist : props.history.push('/');
    const {
        playlistTracksList, commentsList
    } = useSelector(state => ({
        playlistTracksList: state.playlist.playlistTracks,
        commentsList: state.playlist.comments
    }));
    const dispatch = useDispatch();
    const [width, setWidth] = useState(0);
    let columnSize = (width <= 432) ? 1 : 2;

    const updatePageWidth = () => {
        setWidth(window.innerWidth);
    }
    const getdate = number => {
        let date = new Date(number * 1000);
        date = date.toUTCString();
        let period = date.toString().lastIndexOf(':');
        
        return date.substring(0, period);
    }
    useLayoutEffect(() => {
        dispatch(getPlaylistTracks(playlistInfo.id));
        dispatch(getPlaylistComments(playlistInfo.id));
        updatePageWidth();
        window.addEventListener('resize', updatePageWidth);
        updatePageWidth();
        return () => window.removeEventListener('resize', updatePageWidth);
    }, [props, playlistInfo, dispatch]);
    console.log(commentsList);
    return (
        <div className={"main-body playlist"}>
            {
                playlistTracksList !== null ?
                    <Grid className="playlist-setion">
                        <h1 className="playlist-title">{playlistInfo.title}</h1>
                        <Grid.Row columns={columnSize}>
                            <Grid.Column width={12}>
                                <div>
                                    <img src={playlistTracksList[0].album.cover_big} alt="music-icon" className="track-img" />
                                    <AudioPlayer
                                        // autoPlay
                                        src={playlistTracksList[0].preview}
                                        onPlay={e => console.log("onPlay")}
                                    />
                                    <br />
                                </div>
                                <div className="comment-section">
                                    {
                                        commentsList.map(comment =>
                                            <div className="single-comment">
                                                <img src={comment.author.picture_small} alt="user-pic" className="user-pic" />
                                                <div className="comment-text-section">
                                                    <div className="comment-top">
                                                        <p>{comment.author.name}</p>
                                                        <p className="date-text">{getdate(comment.date)}</p>
                                                    </div>
                                                    <p>{comment.text}</p>
                                                </div>
                                            </div>
                                        )
                                    }

                                </div>
                            </Grid.Column>
                            <Grid.Column className="more-tracks" width={4}>
                                {
                                    playlistTracksList.map(item => (
                                        <div key={item.id}>
                                            <img src={item.album.cover_medium} alt="music-icon" />
                                        </div>
                                    ))
                                }

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    :
                    <Loader active />
            }

        </div>
    )
}

export default ViewPlaylist;