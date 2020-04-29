import {
    PLAYLIST, COMMENTS, API_FAIL
} from './../constants/constants';
import { DEEZER_ENDPOINT } from './config';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

function getPlaylistTracksPromise(playlistId) {
    return fetch(proxyurl + `${DEEZER_ENDPOINT}/playlist/${playlistId}/tracks`)
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

export const getPlaylistTracks = (playlistId) => (dispatch) => {
    return getPlaylistTracksPromise(playlistId)
        .then(resp => dispatch({
            type: PLAYLIST,
            data: resp
        }))
        .catch(resp => dispatch({
            type: API_FAIL,
            data: resp
        }))
};

function getPlaylistCommentsPromise(playlistId) {
    return fetch(proxyurl + `${DEEZER_ENDPOINT}/playlist/${playlistId}/comments`)
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

export const getPlaylistComments = (playlistId) => (dispatch) => {
    return getPlaylistCommentsPromise(playlistId)
        .then(resp => dispatch({
            type: COMMENTS,
            data: resp
        }))
        .catch(resp => dispatch({
            type: API_FAIL,
            data: resp
        }))
};
