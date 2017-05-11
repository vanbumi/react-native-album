// Index.android.js place code here to build android app

// Import library to help create component
import React from 'react';

// import ReactNative from 'react-native';
import { AppRegistry, View } from 'react-native';

// import Header
import Header from './src/components/header';

// import AlbumList
import AlbumList from './src/components/AlbumList'

// Create component

const App = () => {
    return (
        <View>
            <Header headerText={'My Albums'} />
            <AlbumList />
        </View>
    );
};

// Render it to device

AppRegistry.registerComponent('albums', () => App);
