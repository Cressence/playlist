import {
    CHART_ALBUMS, API_FAIL
} from './../constants/constants';
import { DEEZER_ENDPOINT } from './config';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

function getChartAlbumsPromise() {
    return fetch(proxyurl + `${DEEZER_ENDPOINT}/chart/albums`)
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

export const getChartAlbums = () => (dispatch) => {
    return getChartAlbumsPromise()
        .then(resp => dispatch({
            type: CHART_ALBUMS,
            data: resp
        }))
        .catch(resp => dispatch({
            type: API_FAIL,
            data: resp
        }))
};
