import React from 'react';
import PropTypes from 'prop-types';
import { Header, Modal } from 'semantic-ui-react';
import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/lib/styles.css';
import './track.css';


function Track(props) {
    return (
        <Modal trigger={props.trigger} size="small" className="track-background">
            <Modal.Content>
                <Modal.Description>
                    <Header>{props.music.title}</Header>
                    <AudioPlayer
                        autoPlay
                        src={props.music.preview}
                        onPlay={e => console.log("onPlay")}
                    />
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