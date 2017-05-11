import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style = {styles.ContainerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    ContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#eee',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardSection;