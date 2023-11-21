import {ThunkAction} from 'redux-thunk';
import {AnyAction} from 'redux';
import {createAsyncAction} from 'typesafe-actions';

import {fetchUsers, TUser} from '../API';
import {RootState} from '../store';

export const fetchUserAsync = createAsyncAction('FETCH_USER_REQUEST', 'FETCH_USES_SUCCESS', 'FETCH_USER_FAILURE')<
    undefined,
    {user: TUser; length: number}
>();

export const fetchUserThunk =
    (id: number): ThunkAction<void, RootState, unknown, AnyAction> =>
    async dispatch => {
        const response = await fetchUsers();
        const user = response.data.find(el => el.id === id);
        if (user) {
            dispatch(fetchUserAsync.success({user, length: response.length}));
        } else {
            dispatch(fetchUserAsync.failure('error', {}));
        }
    };
