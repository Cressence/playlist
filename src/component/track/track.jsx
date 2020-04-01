import React from 'react';
import PropTypes from 'prop-types';
import { Header, Modal } from 'semantic-ui-react'

import './track.css';


function Track(props) {
    return (
        <Modal trigger={props.trigger} size="small">
            <Modal.Header>Albums</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>Hello</Header>
                    <p><strong>Release Date:</strong> test</p>
                    <p><strong>Fans:</strong> test</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
}

Track.propTypes = {
    music: PropTypes.string,
    title: PropTypes.string,
    trigger: PropTypes.node
}

export default Track;