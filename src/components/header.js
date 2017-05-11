// Import library for making a component
import React from 'react';

//import ReactNative from 'react-native'; 
// and refactor it to become:
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style = {viewStyle}> 
          <Text style = {textStyle}>{props.headerText}</Text>
        </View>  
    );    
};

const styles = {
    viewStyle: {
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000' ,
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2,
        elevation: 5    
    },
    textStyle: {
        fontSize:20
    }
};  

// Make the component available to other parts of the App
export default Header;
