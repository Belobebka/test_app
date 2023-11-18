import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import UsersList from './components/UsersList';
import {NavigationFunctionComponent} from 'react-native-navigation';

const Home: NavigationFunctionComponent = ({componentId}) => (
    <SafeAreaView style={styles.root}>
        <UsersList componentId={componentId} />
    </SafeAreaView>
);

const styles = StyleSheet.create({root: {flex: 1}});

export default Home;
