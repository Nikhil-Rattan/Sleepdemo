import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,ImageBackground,ScrollView,Image,SafeAreaView } from 'react-native';



const bg = require('../images/bgimages/moon.png');
export default class StoriesScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={bg} style={styles.bgimg}>
                    <View style={styles.headingView}>
                        <Text style={styles.txt1}>Sleep.</Text>
                        <TouchableOpacity style={styles.toucableheading}>
                            <Text style={styles.txt2}>🤗 Say thanks</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            <ScrollView style={{width:'100%',height:'20%',bottom:'5%',position:'absolute', marginBottom:'5%',}}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <TouchableOpacity>
                        <Image source={require('../images/icons/3-stars.png')} style={{height:88, width:88}}/>
                        <Text style={{color:'white',fontSize:12, fontWeight:'bold',alignSelf:'center'}}>Experts Pick</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:'2.5%',marginRight:'3%',}}>
                        <Image source={require('../images/icons/star.png')} style={{height:70, width:70}}/>
                        <Text style={{color:'white',fontSize:12, fontWeight:'bold',alignSelf:'center',paddingTop:'2%'}}>Ambient</Text>
                    </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:'2.5%',marginRight:'3%'}}>
                        <Image source={require('../images/icons/wave.png')} style={{height:70, width:70}}/>
                        <Text style={{color:'white',fontSize:12, fontWeight:'bold',alignSelf:'center',paddingTop:'2%'}}>Nature</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:'2.5%',marginRight:'3%'}}>
                        <Image source={require('../images/icons/baby-boy.png')} style={{height:70, width:70}}/>
                        <Text style={{color:'white',fontSize:12, fontWeight:'bold',alignSelf:'center',paddingTop:'2%'}}>Kids</Text> 
                    </TouchableOpacity>
                </View>    
            </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#02203c',
        position: 'relative'

    },
    bgimg: {
        width: '100%',
        height: '80%',
        resizeMode: 'contain',

    },
    headingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%',

    },
    txt1: {
        fontSize: 22,
        // fontFamily: 'Avenir Next W05,Avenir,Helvetica Neue,Helvetica,Arial,sans-serif',
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '4%',
    },
    toucableheading: {
        backgroundColor: '#083c64',
        borderRadius: 30,
        marginRight: '4%',
        justifyContent: 'center'

    },
    txt2: {
        fontSize: 16,
        color: 'white',
        // fontFamily: 'Avenir Next W05,Avenir,Helvetica Neue,Helvetica,Arial,sans-serif',
        fontWeight: 'bold',
        paddingLeft: '3%',
        paddingRight: '3%'
    },
});