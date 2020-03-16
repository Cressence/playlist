import {
    ALBUM_TRACKS, API_FAIL
} from './../constants/constants';
import { DEEZER_ENDPOINT } from './config';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

function getAlbumTracksPromise(albumId) {
    return fetch(proxyurl + `${DEEZER_ENDPOINT}/album/${albumId}/tracks`)
        .then(data => {
            return new Promise(resolve => {
                resolve(data.json());
            })
                .then(finalData => {
                    return finalData;
                });
        })
        .catch(err => {
            return (err.response);
        });
}

export const getAlbumTracks = (albumId) => (dispatch) => {
    return getAlbumTracksPromise(albumId)
        .then(resp => dispatch({
            type: ALBUM_TRACKS,
            data: resp
        }))
        .catch(resp => dispatch({
            type: API_FAIL,
            data: resp
        }))
};
