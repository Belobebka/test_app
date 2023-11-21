import {combineReducers} from 'redux';
import {usersReducer} from './users';
import {favoriteReducer} from './favorite';
import {userReducer} from './user';

export const reducers = combineReducers({
    users: usersReducer,
    favorites: favoriteReducer,
    user: userReducer,
});
