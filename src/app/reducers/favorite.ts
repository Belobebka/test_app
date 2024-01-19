import {ActionType, createReducer} from 'typesafe-actions';
import {removeFavorite, setFavorite} from '../actions/favorites';

type FavoriteUser = {
    id: number;
};

type FavoriteState = {
    items: FavoriteUser[];
};

const initialState: FavoriteState = {
    items: [],
};

export type FavoriteActions = ActionType<typeof removeFavorite | typeof setFavorite>;

export const favoriteReducer = createReducer<FavoriteState, FavoriteActions>(initialState)
    .handleAction(removeFavorite, (state, action) => {
        const newItems = state.items.filter(item => item.id !== action.payload);
        return {...state, items: newItems, itemsLength: newItems.length};
    })
    .handleAction(setFavorite, (state, action) => {
        const newItems = [...state.items, {id: action.payload}];
        return {...state, items: newItems, itemsLength: newItems.length};
    });
