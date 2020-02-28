import React, { useLayoutEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { Loader } from 'semantic-ui-react';
import { useDispatch, useSelector } from "react-redux";

import { getGenre } from './../../actions/editorial';
import { getChartAlbums } from './../../actions/charts';
import { getArtistAlbums } from './../../actions/artist';
import Navbar from './../../component/navbar/navbar';
import ArtistAlbum from './../../component/artistAlbum/artistAlbum';

function Main() {
    const {
        genreList, chartAlbumsList, chartArtistsList, chartTracksList, chartPlaylistList, chartPodcastList
    } = useSelector(state => ({
        genreList: state.genre.genres,
        chartAlbumsList: state.chart.chartAlbums,
        chartArtistsList: state.chart.chartArtists,
        chartTracksList: state.chart.chartTracks,
        chartPlaylistList: state.chart.chartPlaylist,
        chartPodcastList: state.chart.chartPodcast
    }));
    const dispatch = useDispatch();

    // const [width, setWidth] = useState(0);
    // const background = require("./../../assets/img/background.jpg");
    // let columnSize;
    // if (width < 768 && width > 432) {
    //     columnSize = 2;
    // } else if (width < 1024 && width >= 768) {
    //     columnSize = 3;
    // } else if (width <= 432) {
    //     columnSize = 1;
    // } else {
    //     columnSize = 5;
    // }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };
    // const updatePageWidth = () => {
    //     setWidth(window.innerWidth);
    // }
    const artistAlbums = (artistId) => {
        dispatch(getArtistAlbums(artistId));
    }
    useLayoutEffect(() => {
        // updatePageWidth();
        dispatch(getGenre());
        dispatch(getChartAlbums());
        // window.addEventListener('resize', updatePageWidth);
        // updatePageWidth();
        // return () => window.removeEventListener('resize', updatePageWidth);
    }, [dispatch]);
    return (
        <div className={genreList === null || chartPlaylistList === null ? "body-container-loader" : "main-body"}>
            <Navbar />

            {
                genreList === null || chartAlbumsList === null ?
                    <Loader active />
                    :
                    <div className="body-container">

                        <div>
                            <h3 className="white sub-title">Top Artists</h3>
                            <p className="grey small-text">Explore top artists</p>
                            <div className="genres">
                                {
                                    chartArtistsList !== null ?
                                        <Carousel responsive={responsive} arrows={true}>
                                            {
                                                chartArtistsList.data.map((item, index) => {
                                                    return (
                                                        <ArtistAlbum
                                                            key={index}
                                                            viewData={
                                                                <div>
                                                                    <div onClick={() => artistAlbums(item.id)} className="single-artist" style={{ backgroundImage: `url(${item.picture_big})` }}>
                                                                        <div className="artist-overlay ">
                                                                        </div>
                                                                    </div>
                                                                    <p className="white song-artist-name"><strong>{item.name}</strong></p>
                                                                </div>
                                                            }
                                                        />
                                                    )
                                                })
                                            }
                                        </Carousel>
                                        : null
                                }
                            </div>
                        </div>

                        <div className="songs">
                            <h3 className="white sub-title">Albums</h3>
                            <p className="grey small-text">Explore top albums</p>
                            <div className="genres">
                                {
                                    chartAlbumsList !== null ?
                                        <Carousel responsive={responsive} arrows={true}>
                                            {
                                                chartAlbumsList.data.map((item, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div className="single-genre" style={{ backgroundImage: `url(${item.cover_big})` }}>
                                                                <div className="album-overlay">
                                                                    <h3 className="white genre-title">{item.name}</h3>
                                                                </div>
                                                            </div>
                                                            <p className="white song-artist-name"><strong>{item.artist.name}</strong></p>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </Carousel>
                                        : null
                                }
                            </div>
                        </div>

                        <div className="songs">
                            <h3 className="white sub-title">Genre</h3>
                            <p className="grey small-text">Explore genres</p>
                            <div className="genres">
                                {
                                    genreList !== null ?
                                        <Carousel responsive={responsive} arrows={true}>
                                            {
                                                genreList.data.map((item, index) => {
                                                    return (
                                                        <div key={index} className="single-genre" style={{ backgroundImage: `url(${item.picture_big})` }}>
                                                            <div className="genre-overlay">
                                                                <h3 className="white genre-title">{item.name}</h3>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Carousel>
                                        : null
                                }
                            </div>
                        </div>

                        <div className="songs">
                            <h3 className="white sub-title">Tracks</h3>
                            <p className="grey small-text">Explore by albums</p>
                            <div className="genres">
                                {
                                    chartTracksList !== null ?
                                        <Carousel responsive={responsive} arrows={true}>
                                            {
                                                chartTracksList.data.map((item, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div className="single-genre" style={{ backgroundImage: `url(${item.album.cover_big})` }}>
                                                                <div className="track-overlay">
                                                                    <h3 className="white genre-title">{item.title}</h3>
                                                                </div>
                                                            </div>
                                                            <p className="white song-artist-name"><strong>{item.artist.name}</strong></p>
                                                            <p className="white song-album-name small-text">{item.album.title}</p>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </Carousel>
                                        : null
                                }
                            </div>
                        </div>

                        <div className="songs">
                            <h3 className="white sub-title">Playlist</h3>
                            <p className="grey small-text">Explore playlists</p>
                            <div className="genres">
                                {
                                    chartPlaylistList !== null ?
                                        <Carousel responsive={responsive} arrows={true}>
                                            {
                                                chartPlaylistList.data.map((item, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div className="single-genre" style={{ backgroundImage: `url(${item.picture_big})` }}>
                                                                <div className="playlist-overlay">
                                                                </div>
                                                            </div>
                                                            <p className="white song-artist-name"><strong>{item.title}</strong></p>
                                                            <p className="white song-album-name small-text">{item.nb_tracks} tracks</p>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </Carousel>
                                        : null
                                }
                            </div>
                        </div>

                        <div className="songs">
                            <h3 className="white sub-title">Podcast</h3>
                            <p className="grey small-text">Explore podcast</p>
                            <div className="genres">
                                {
                                    chartPodcastList !== null ?
                                        <Carousel responsive={responsive} arrows={true}>
                                            {
                                                chartPodcastList.data.map((item, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div className="single-genre" style={{ backgroundImage: `url(${item.picture_big})` }}>
                                                                <div className="podcast-overlay">
                                                                    <h3 className="white genre-title">{item.title}</h3>
                                                                </div>
                                                            </div>
                                                            <p className="white song-artist-name"><strong>{item.fans} fans</strong></p>
                                                            <p className="white song-album-name small-text three-lines-text">{item.description}</p>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </Carousel>
                                        : null
                                }
                            </div>
                        </div>

                        {/* <div className="songs">
                    <h3 className="white sub-title">Songs</h3>
                    <p className="grey small-text">Browse all music</p>
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
                </div> */}

                    </div>
            }



        </div>
    )
}

export default Main;