import axios from 'axios';
import {
    EDITORIAL, API_FAIL
} from './../constants/constants';

function getLocalizationPromise(language) {
    return axios.get(`https://deezerdevs-deezer.p.rapidapi.com/editorial/132`)
        .then(data => {
            return data;
        })
        .catch(err => {
            return (err.response);
        });
}

export const getLocalization = (language) => (dispatch) => {
    return getLocalizationPromise(language)
        .then(resp => dispatch({
            type: EDITORIAL,
            data: resp
        }))
        .catch(resp => dispatch({
            type: API_FAIL,
            data: resp
        }))
};

// export const getEditorial = (language) => (dispatch) => {
//     if (language === 'en') {
//         return axios.all([getDashboardLocalization(language), getVerificationLocalization(language)])
//             .then(axios.spread((dashboard, verification) => dispatch({
//                 type: LOCALS,
//                 data: dashboard,
//                 dataVerification: verification
//             })))
//             .catch(axios.spread((dashboard, verification) => dispatch({
//                 type: API_FAIL,
//                 data: dashboard,
//                 dataVerification: verification
//             })))
//     } else {
//         return axios.all([getDashboardLocalization(language), getVerificationLocalization('en')])
//         .then(axios.spread((dashboard, verification) => dispatch({
//             type: LOCALS,
//             data: dashboard,
//             dataVerification: verification
//         })))
//         .catch(axios.spread((dashboard, verification) => dispatch({
//             type: API_FAIL,
//             data: dashboard,
//             dataVerification: verification
//         })))
//     }

// };
