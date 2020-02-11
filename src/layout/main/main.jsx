import React, { useState, useLayoutEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { Grid } from 'semantic-ui-react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getGenre } from './../../actions/editorial';
import Navbar from './../../component/navbar/navbar';

function Main() {
    // const { genreList } = useSelector(state => ({
    //     genreList: state.genre.genres
    // }));
    // const dispatch = useDispatch();
    const [width, setWidth] = useState(0);
    const background = require("./../../assets/img/background.jpg");
    let columnSize;
    if (width < 768 && width > 432) {
        columnSize = 2;
    } else if (width < 1024 && width >= 768) {
        columnSize = 3;
    } else if (width <= 432) {
        columnSize = 1;
    } else {
        columnSize = 5;
    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const updatePageWidth = () => {
        setWidth(window.innerWidth);
    }
    useLayoutEffect(() => {
        updatePageWidth();
        // dispatch(getGenre());
        window.addEventListener('resize', updatePageWidth);
        updatePageWidth();
        return () => window.removeEventListener('resize', updatePageWidth);
    }, []);

    return (
        <div className="main-body">
            <Navbar />

            <div className="body-container">
                <div>
                    <h3 className="white sub-title">Browse</h3>
                    <p className="grey small-text">Explore by genre</p>
                    <div className="genres">
                        <Carousel responsive={responsive}>
                            <div className="single-genre">
                                <h3 className="white genre-title">POP</h3>
                            </div>
                            <div className="single-genre">
                                <h3 className="white genre-title">POP</h3>
                            </div>
                            <div className="single-genre">
                                <h3 className="white genre-title">POP</h3>
                            </div>
                            <div className="single-genre">
                                <h3 className="white genre-title">POP</h3>
                            </div>
                            <div className="single-genre">
                                <h3 className="white genre-title">POP</h3>
                            </div>
                        </Carousel>
                    </div>
                </div>

                <div className="songs">
                    <h3 className="white sub-title">Songs</h3>
                    <p className="grey small-text">View all music</p>
                    <div className="songs-grid">
                        <Grid columns={columnSize}>
                            <Grid.Column>
                                <div className="single-song device-blocking" style={{ backgroundImage: `url(${background})` }}>
                                    <div className="song-overlay">
                                        <h3 className="white song-title">Song title here</h3>
                                    </div>
                                </div>
                                <p className="white song-artist-name"><strong>Artist name</strong></p>
                                <p className="white small-text">Release date here</p>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="single-song device-blocking" style={{ backgroundImage: `url(${background})` }}>
                                    <div className="song-overlay">
                                        <h3 className="white song-title">Song title here</h3>
                                    </div>
                                </div>
                                <p className="white song-artist-name"><strong>Artist name</strong></p>
                                <p className="white small-text">Release date here</p>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="single-song device-blocking" style={{ backgroundImage: `url(${background})` }}>
                                    <div className="song-overlay">
                                        <h3 className="white song-title">Song title here</h3>
                                    </div>
                                </div>
                                <p className="white song-artist-name"><strong>Artist name</strong></p>
                                <p className="white small-text">Release date here</p>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="single-song device-blocking" style={{ backgroundImage: `url(${background})` }}>
                                    <div className="song-overlay">
                                        <h3 className="white song-title">Song title here</h3>
                                    </div>
                                </div>
                                <p className="white song-artist-name"><strong>Artist name</strong></p>
                                <p className="white small-text">Release date here</p>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="single-song device-blocking" style={{ backgroundImage: `url(${background})` }}>
                                    <div className="song-overlay">
                                        <h3 className="white song-title">Song title here</h3>
                                    </div>
                                </div>
                                <p className="white song-artist-name"><strong>Artist name</strong></p>
                                <p className="white small-text">Release date here</p>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="single-song device-blocking" style={{ backgroundImage: `url(${background})` }}>
                                    <div className="song-overlay">
                                        <h3 className="white song-title">Song title here</h3>
                                    </div>
                                </div>
                                <p className="white song-artist-name"><strong>Artist name</strong></p>
                                <p className="white small-text">Release date here</p>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="single-song device-blocking" style={{ backgroundImage: `url(${background})` }}>
                                    <div className="song-overlay">
                                        <h3 className="white song-title">Song title here</h3>
                                    </div>
                                </div>
                                <p className="white song-artist-name"><strong>Artist name</strong></p>
                                <p className="white small-text">Release date here</p>
                            </Grid.Column>
                            <Grid.Column>
                                <div className="single-song device-blocking" style={{ backgroundImage: `url(${background})` }}>
                                    <div className="song-overlay">
                                        <h3 className="white song-title">Song title here</h3>
                                    </div>
                                </div>
                                <p className="white song-artist-name"><strong>Artist name</strong></p>
                                <p className="white small-text">Release date here</p>
                            </Grid.Column>
                        </Grid>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main;