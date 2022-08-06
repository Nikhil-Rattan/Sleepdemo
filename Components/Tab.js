import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';


const Tab = ({ color, tab, onPress,icon}) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={icon} style={{ tintColor: color, alignSelf: 'center', height: 22, width: 22 }} />
            <Text
                style={{
                    color, fontSize: 14,
                    // fontFamily: 'Avenir Next W05,Avenir,Helvetica Neue,Helvetica,Arial,sans-serif',
                    fontWeight:'bold',
                    justifyContent:'center'
                }} >
                {tab.name}</Text>
        </TouchableOpacity>
    );
};


export default Tab;