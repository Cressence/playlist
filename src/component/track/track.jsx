import React from 'react';
import PropTypes from 'prop-types';
import { Header, Modal } from 'semantic-ui-react';
import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/lib/styles.css';
import './track.css';


function Track(props) {
    return (
        <Modal trigger={props.trigger} size="small">
            <Modal.Content>
                <Modal.Description>
                    <Header>{props.music.title}</Header>
                    <img src={require('./../../assets/img/music.gif')} alt="music-icon" className="music-gif" />
                    <AudioPlayer
                        autoPlay
                        src={props.music.preview}
                        onPlay={e => console.log("onPlay")}
                    />
                    <br />
                    <p><strong>{props.music.artist.name}</strong></p>
                    <p>Listen to complete track on <a target="_blank" alt="deezer-music" rel="noopener noreferrer" href={props.music.link}>Deezer</a></p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
}

Track.propTypes = {
    music: PropTypes.object,
    trigger: PropTypes.node
}

export default Track;