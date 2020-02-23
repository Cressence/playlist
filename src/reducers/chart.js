import { CHART_ALBUMS, API_FAIL } from './../constants/constants';

const initialState = {
    chartAlbums: null,
    appError: null
};

const chart = (state = initialState, action) => {
    switch (action.type) {
        case CHART_ALBUMS: {
            if (action.data) {
                return {
                    ...state,
                    genres: action.data
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