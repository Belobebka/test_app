import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import {TUser} from '../../../app/API';
import {COMMON_STYLES} from '../../../styles';

type DescriptionProps = {
    user: TUser;
    style?: StyleProp<TextStyle>;
};

export const Description = ({user, style}: DescriptionProps) => {
    const {id, age, name} = user;
    return (
        <View style={styles.text}>
            <Text style={style}>id: {id}</Text>
            <Text style={style}>Name: {name}</Text>
            <Text style={style}>Age: {age}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        ...COMMON_STYLES.ml_2,
    },
});
