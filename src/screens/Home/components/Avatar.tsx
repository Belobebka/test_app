import { Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import React from 'react';
import {ImagePlaceholder} from './ImagePlaceholder/ImagePlaceholder';
import {COMMON_STYLES} from '../../../styles';

type AvatarProps = {
    avatar: string;
    style?: StyleProp<ViewStyle>;
};

export const Avatar = ({avatar, style}: AvatarProps) => {
    return (
        <View style={[styles.imageContainer, style]}>
            {avatar ? <Image style={styles.image} source={{uri: avatar}} /> : <ImagePlaceholder />}
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 16,
    },
    imageContainer: {
        ...COMMON_STYLES.ml_1,
        height: 100,
        width: 100,
        borderWidth: 1,
        borderRadius: 16,
    },
});
