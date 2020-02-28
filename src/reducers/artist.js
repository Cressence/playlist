import {
    ARTIST_ALBUMS, API_FAIL
} from './../constants/constants';

const initialState = {
    artistAlbums: null,
};

const artist = (state = initialState, action) => {
    switch (action.type) {
        case ARTIST_ALBUMS: {
            if (action.data) {
                return {
                    ...state,
                    artistAlbums: action.data.data
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
export default artist;