import { CHART_ALBUMS, API_FAIL } from './../constants/constants';

const initialState = {
    chartAlbums: null,
    chartTracks: null,
    chartPodcast: null,
    chartPlaylist: null,
    chartArtists: null,
    appError: null
};

const chart = (state = initialState, action) => {
    switch (action.type) {
        case CHART_ALBUMS: {
            if (action.data) {
                return {
                    ...state,
                    chartAlbums: action.data.albums,
                    chartPlaylist: action.data.playlists,
                    chartPodcast: action.data.podcasts.data,
                    chartTracks: action.data.tracks,
                    chartArtists: action.data.artists,
                }
            }
            return;
        }
        case API_FAIL: {
            return {
                ...state,
                appError: action.data
            }
        }
        default:
            return state;
    }
};
export default chart;