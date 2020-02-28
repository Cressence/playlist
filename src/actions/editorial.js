import {
    GENRE, API_FAIL
} from './../constants/constants';
import { DEEZER_ENDPOINT } from './config';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

function getGenrePromise() {
    return fetch(proxyurl + `${DEEZER_ENDPOINT}/genre`)
        .then(data => {
            return new Promise(resolve => {
                resolve(data.json());
            })
                .then(finalData => {
                    return finalData
                });
        })
        .catch(err => {
            return (err.response);
        });
}

export const getGenre = () => (dispatch) => {
    return getGenrePromise()
        .then(resp => dispatch({
            type: GENRE,
            data: resp
        }))
        .catch(resp => dispatch({
            type: API_FAIL,
            data: resp
        }))
};
