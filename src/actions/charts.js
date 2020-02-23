import {
    CHART_ALBUMS, API_FAIL
} from './../constants/constants';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

function getChartAlbumsPromise() {
    return fetch(proxyurl + `https://api.deezer.com/chart/albums`)
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
