import { combineReducers } from 'redux';
import genre from './editorial';
import chart from './chart';
import artist from './artist';
import album from './album';

export default combineReducers({
    genre,
    chart,
    artist,
    album
})