import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {TUser} from '../app/API';
import React from 'react';
import {Avatar} from './Home/components/Avatar';
import {Description} from './Home/components/Description';
import Icons from '../icons';
import {useAppDispatch, useFavorite} from '../app/hooks';
import {removeFavorite, setFavorite} from '../app/actions/favorites';

type UserDetailProps = {
    user: TUser;
    isFavorite: boolean;
};
function UserDetail({user}: UserDetailProps) {
    const dispatch = useAppDispatch();
    const {checkIsFavorite} = useFavorite();

    const isFavorite = checkIsFavorite(user.id);
    const handleChangeFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(user.id));
        } else {
            dispatch(setFavorite(user.id));
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar avatar={user.avatar} style={styles.avatar} />
                <TouchableOpacity onPress={handleChangeFavorite} style={styles.favoriteContainer}>
                    <Icons.HeartBlack color={isFavorite ? 'red' : 'black'} style={styles.favorite} />
                </TouchableOpacity>
            </View>
            <Description user={user} style={styles.text} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 20,
    },
    avatarContainer: {
        position: 'relative',
        alignSelf: 'flex-start',
    },
    avatar: {
        height: 250,
        width: 250,
    },
    text: {
        fontSize: 15,
        lineHeight: 15,
        fontWeight: 'bold',
    },
    favoriteContainer: {
        position: 'absolute',
        width: 80,
        height: 80,
        bottom: -40,
    },
    favorite: {
        width: 80,
        height: 80,
        opacity: 0.9,
    },
});

export default UserDetail;
