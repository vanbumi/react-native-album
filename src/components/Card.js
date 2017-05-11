import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style = {styles.ContainerStyle}>
            {props.children}
        </View>
    );
};

// style here
const styles = {
    ContainerStyle : {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        elevation: 1
    }
};

 export default Card;