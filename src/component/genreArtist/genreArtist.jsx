import React from 'react';
import PropTypes from 'prop-types';
import { Header, Image, Modal, Loader, Dimmer } from 'semantic-ui-react'
import { useSelector } from "react-redux";


function GenreArtists(props) {
    const {
        genreArtistList
    } = useSelector(state => ({
        genreArtistList: state.genre.genreArtists,
    }));
    return (
        <Modal trigger={props.viewData} size="small">
            <Modal.Header>Artists ( {genreArtistList !== null ? genreArtistList.length : null} )</Modal.Header>
            <Modal.Content scrolling>
                {
                    genreArtistList === null ?
                        <Dimmer active inverted>
                            <Loader size="small" />
                        </Dimmer>
                        :
                        genreArtistList.map((item, index) => {
                            return (
                                <div key={index} className="single-artist-album">
                                    <Image size='small' src={item.picture_medium} wrapped />

                                    <Modal.Description>
                                        <Header>{item.name}</Header>
                                        <p><strong>Has radio:</strong> {item.radio? 'Yes': 'No'}</p>
                                    </Modal.Description>
                                </div>
                            )
                        })

                }
            </Modal.Content>
        </Modal>
    );
}

GenreArtists.propTypes = {
    viewData: PropTypes.node
}

export default GenreArtists;