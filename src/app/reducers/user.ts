import {ActionType, createReducer} from 'typesafe-actions';
import {TUser} from '../API';
import {fetchUserAsync} from '../asyncActions/user';

type UserState = {
    user: TUser | null;
    status: string;
};

const initialState: UserState = {
    user: {} as TUser,
    status: 'loading',
};

export type UserActions = ActionType<
    typeof fetchUserAsync.request | typeof fetchUserAsync.success | typeof fetchUserAsync.failure
>;

export const userReducer = createReducer<UserState, UserActions>(initialState)
    .handleAction(fetchUserAsync.request, state => ({...state, status: 'loading'}))
    .handleAction(fetchUserAsync.success, (state, action) => ({
        ...state,
        status: 'idle',
        user: action.payload.user,
    }))
    .handleAction(fetchUserAsync.failure, state => ({
        ...state,
        status: 'filed',
        user: null,
    }));
