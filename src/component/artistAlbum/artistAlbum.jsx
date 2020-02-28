import React from 'react';
import PropTypes from 'prop-types';
import { Header, Image, Modal, Loader, Dimmer } from 'semantic-ui-react'
import { useSelector } from "react-redux";

import './artistAlbum.css';


function ArtistAlbum(props) {
    const {
        artistAlbumsList
    } = useSelector(state => ({
        artistAlbumsList: state.artist.artistAlbums
    }));
    console.log(artistAlbumsList)
    return (
        <Modal trigger={props.viewData} size="small">
            <Modal.Header>Albums ( {artistAlbumsList !== null ? artistAlbumsList.length : null} )</Modal.Header>
            <Modal.Content scrolling>
                {
                    artistAlbumsList === null ?
                        <Dimmer active inverted>
                            <Loader size="small" />
                        </Dimmer>
                        :
                        artistAlbumsList.map((item, index) => {
                            return (
                                <div key={index} className="single-artist-album">
                                    <Image size='small' src={item.cover_medium} wrapped />

                                    <Modal.Description>
                                        <Header>{item.title}</Header>
                                        <p><strong>Release Date:</strong> {item.release_date}</p>
                                        <p><strong>Fans:</strong> {item.fans}</p>
                                    </Modal.Description>
                                </div>
                            )
                        })

                }
            </Modal.Content>
        </Modal>
    );
}

ArtistAlbum.propTypes = {
    viewData: PropTypes.node
}

export default ArtistAlbum;