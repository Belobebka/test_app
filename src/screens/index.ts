import Home from './Home/Home';
import {ComponentType} from 'react';
import UserDetail from './UserDetail';
import UsersList from './Home/components/UsersList';

export const screens = (<T extends {[key: string]: ComponentType<any>}>(obj: T): T => obj)({
    Home,
    UserDetail,
    UsersList,
});

export type ScreenNames = Extract<keyof typeof screens, string>;
