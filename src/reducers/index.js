import { combineReducers } from 'redux';
import genre from './editorial';
import chart from './chart';


export default combineReducers({
    genre,
    chart
})