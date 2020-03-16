import { ALBUM_TRACKS, API_FAIL } from './../constants/constants';

const initialState = {
    albumTracks: null,
};

const album = (state = initialState, action) => {
    switch (action.type) {
        case ALBUM_TRACKS: {
            if (action.data) {
                return {
                    ...state,
                    albumTracks: action.data.data,
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
export default album;