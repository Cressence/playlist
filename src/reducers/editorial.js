import { GENRE, GENRE_ARTISTS, API_FAIL } from './../constants/constants';

const initialState = {
    genres: null,
    appError: null,
    genreArtists: null,
};

const genre = (state = initialState, action) => {
    switch (action.type) {
        case GENRE: {
            if (action.data) {
                return {
                    ...state,
                    genres: action.data
                }
            }
            return;
        }
        case GENRE_ARTISTS: {
            if (action.data) {
                return {
                    ...state,
                    genreArtists: action.data.data
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
export default genre;