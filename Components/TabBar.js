import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Tab from './Tab'


const windowHeight = Dimensions.get('window').height;

const TabBar = ({ state, navigation }) => {
    const [selected, setSelected] = useState('Home')
    const { routes } = state;
    const renderColor = (currentTab) => (currentTab === selected ? '#41b2f3' : '#215e82');
    const handlePress = (activeTab, index) => {
        if (state.index !== index)
            setSelected(activeTab);
        navigation.navigate(activeTab);

    }

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                {
                    routes.map((route, index) =>
                        <Tab tab={route}
                            icon={route.params.icon}
                            onPress={() => handlePress(route.name, index)}
                            color={renderColor(route.name)}
                            key={route.key} />)
                }
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({

    wrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#05203e',
        justifyContent: 'center',
        borderColor:'#41b2f3',
        borderTopWidth :0.5,
        height:windowHeight*0.03

    },
    container: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        height:windowHeight*0.05,
        marginBottom:15
    }

});

export default TabBar;