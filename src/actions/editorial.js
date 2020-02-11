import {
    GENRE, API_FAIL
} from './../constants/constants';

function getGenrePromise() {
    return fetch(`https://api.deezer.com/genre`)
        .then(data => {
            console.log(data)
            return data;
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
