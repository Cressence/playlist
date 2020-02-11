import { GENRE, API_FAIL } from './../constants/constants';

const initialState = {
    genres: null,
    appError: null
};

const genre = (state = initialState, action) => {
    switch (action.type) {
        case GENRE: {
            if (action.data.data) {
                if (action.data.status === 200) {
                    return {
                        ...state,
                        genres: action.data.data
                    }
                } else {
                    return {
                        ...state,
                        appError: action.data
                    }
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