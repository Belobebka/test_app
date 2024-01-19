import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TUser} from '../../../app/API';
import Icons from '../../../icons';
import {COMMON_STYLES} from '../../../styles';
import {Description} from './Description';
import {Avatar} from './Avatar';
import {hitSlop} from '../../../app/constants';

interface IProps {
    item: TUser;
    onRemove: (id: number) => void;
    isFavorite: boolean;
    onChangeFavorite: () => void;
}

export function UserItem(props: IProps) {
    const {item, onRemove, isFavorite, onChangeFavorite} = props;

    const handleRemove = useCallback(() => onRemove(item.id), [item, onRemove]);

    const renderRemoveButton = useCallback(
        () => (
            <TouchableOpacity onPress={handleRemove} style={styles.removeIconWrapper}>
                <Text style={styles.removeIcon}>x</Text>
            </TouchableOpacity>
        ),
        [handleRemove],
    );

    const renderFavoriteBtn = useCallback(
        () => (
            <TouchableOpacity onPress={onChangeFavorite} hitSlop={hitSlop} style={styles.favoriteContainer}>
                <Icons.HeartBlack color={isFavorite ? 'red' : 'black'} style={styles.favorite} />
            </TouchableOpacity>
        ),
        [isFavorite, onChangeFavorite],
    );

    const renderBody = useCallback(() => {
        return (
            <View style={styles.body}>
                <Avatar avatar={item.avatar} />
                {renderFavoriteBtn()}
                <Description user={item} />
                {renderRemoveButton()}
            </View>
        );
    }, [renderFavoriteBtn, item, renderRemoveButton]);

    const renderContainer = useCallback(() => {
        return <View style={styles.container}>{renderBody()}</View>;
    }, [renderBody]);

    return <View style={styles.root}>{renderContainer()}</View>;
}

const styles = StyleSheet.create({
    root: {
        height: 150,
        width: '100%',
    },
    body: {
        ...COMMON_STYLES.pv_2,
        ...COMMON_STYLES.ph_1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        borderWidth: 1,
        borderRadius: 16,
    },
    container: {
        ...COMMON_STYLES.ph_1,
        ...COMMON_STYLES.pv_1,
        height: '100%',
        width: '100%',
    },
    removeIcon: {
        fontSize: 24,
    },
    removeIconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    favoriteContainer: {
        width: 24,
        height: 24,
    },
    favorite: {
        width: 24,
        height: 24,
    },
});
