import { PLAYLIST, API_FAIL } from './../constants/constants';

const initialState = {
    playlistTracks: null,
    appError: null
};

const playlist = (state = initialState, action) => {
    switch (action.type) {
        case PLAYLIST: {
            if (action.data) {
                return {
                    ...state,
                    playlistTracks: action.data.data,
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
export default playlist;