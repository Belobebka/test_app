import {View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useFavorite, useUser} from '../../app/hooks';
import {removeFavorite, setFavorite} from '../../app/actions/favorites';
import {fetchUserThunk} from '../../app/asyncActions/user';
import {Loader} from '../Home/components/Loader/Loader';
import {NavigationComponentProps} from 'react-native-navigation';
import {Content} from './Content';

interface Props extends NavigationComponentProps {
    id: number;
}

const UserDetail = ({id}: Props) => {
    const dispatch = useAppDispatch();
    const {status, user} = useUser();
    const {checkIsFavorite} = useFavorite();

    useEffect(() => {
        dispatch(fetchUserThunk(id));
    }, [dispatch, id]);

    if (!user) {
        return;
    }

    const isFavorite = checkIsFavorite(user.id);
    const handleChangeFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(user.id));
        } else {
            dispatch(setFavorite(user.id));
        }
    };

    return (
        <View style={{flex: 1}}>
            {status === 'loading' || user.id !== id ? (
                <Loader />
            ) : (
                <Content user={user} handleChangeFavorite={handleChangeFavorite} isFavorite={isFavorite} />
            )}
        </View>
    );
};

export default UserDetail;
