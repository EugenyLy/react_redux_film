import {combineReducers} from 'redux';
import FilmsReducer from './reducer_films';
import ActiveFilm from './reducer_active_film';



const rootReducer = combineReducers({
    films: FilmsReducer,
    activeFilm: ActiveFilm,

});

export default rootReducer;
