import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Avatar} from '../Home/components/Avatar';
import Icons from '../../icons';
import {Description} from '../Home/components/Description';
import React from 'react';
import {TUser} from '../../app/API';

type ContentProps = {
    isFavorite: boolean;
    user: TUser;
    handleChangeFavorite: () => void;
};

export const Content = ({isFavorite, user, handleChangeFavorite}: ContentProps) => {
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
};

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
