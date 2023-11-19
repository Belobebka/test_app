import {combineReducers} from 'redux';
import {usersReducer} from './users';
import {favoriteReducer} from './favorite';

export const reducers = combineReducers({
    users: usersReducer,
    favorites: favoriteReducer,
});
