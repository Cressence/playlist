import {
    ARTIST_ALBUMS, API_FAIL
} from './../constants/constants';
import { DEEZER_ENDPOINT } from './config';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

function getArtistAlbumsPromise(artistId) {
    return fetch(proxyurl + `${DEEZER_ENDPOINT}/artist/${artistId}/albums`)
        .then(data => {
            return new Promise(resolve => {
                resolve(data.json());
            })
                .then(finalData => {
                    console.log(finalData)
                    return finalData
                });
        })
        .catch(err => {
            return (err.response);
        });
}

export const getArtistAlbums = (artistId) => (dispatch) => {
    return getArtistAlbumsPromise(artistId)
        .then(resp => dispatch({
            type: ARTIST_ALBUMS,
            data: resp
        }))
        .catch(resp => dispatch({
            type: API_FAIL,
            data: resp
        }))
};
