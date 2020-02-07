import { EDITORIAL, API_FAIL } from './../constants/constants';

const initialState = {
    locals: null,
    appError: null
};

const editorial = (state = initialState, action) => {
    switch (action.type) {
        case EDITORIAL: {
            if (action.data.data) {
                if (action.data.status === 200) {
                    return {
                        ...state,
                        locals: action.data.data
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
export default editorial;