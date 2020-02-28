import { combineReducers } from 'redux';
import genre from './editorial';
import chart from './chart';
import artist from './artist';


export default combineReducers({
    genre,
    chart,
    artist
})