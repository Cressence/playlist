import axios from 'axios';
import {
    EDITORIAL, API_FAIL
} from './../constants/constants';

// function getLocalizationPromise(language) {
//     return axios.get(`${LOCALIZATION_URL}/applications/41/locals/${language}/keys`)
//         .then(data => {
//             return data;
//         })
//         .catch(err => {
//             return (err.response);
//         });
// }

// export const getLocalization = (language) => (dispatch) => {
//     return getLocalizationPromise(language)
//         .then(resp => dispatch({
//             type: EDITORIAL,
//             data: resp
//         }))
//         .catch(resp => dispatch({
//             type: API_FAIL,
//             data: resp
//         }))
// };
