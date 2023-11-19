import {createAction} from 'typesafe-actions';
export const setFavorite = createAction('SET_FAVORITE')<number>();

export const removeFavorite = createAction('REMOVE_FAVORITE')<number>();
