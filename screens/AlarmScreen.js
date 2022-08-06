import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity, ScrollView ,Image, SafeAreaView} from 'react-native';
import IconLeft from 'react-native-vector-icons/FontAwesome';
import Cross from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-elements'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

// const renderInner = () =>(
//     <View style={{backgroundColor:'#0d2843', width:'80%',height:'18%'}}>
//         <View style={{flexDirection:'row',justifyContent:'space-around'}}>
//         <Text style={{fontSize:14,color:'#41b2f3', fontFamily:'Avenir Next W05,Avenir,Helvetica Neue,Helvetica,Arial,sans-serif',fontWeight:'bold'}}>App Language</Text>
//         <Cross name='remove' size={18} color='#41b2f3'/>
//         </View>
//     </View>
// onPress={() =>this.bs.current.snapPoints(0)}

// );


// bs = React.createRef();
// fall = new Animated.Value(1);

export default class AlarmScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}> 
                {/* <BottomSheet 
                    ref={this.bs}
                    snapPoints={[550,0]}
                    renderContent={this.renderInner}
                    initialSnap={1}
                    callbackNode={this.fall}
                    enabledContentGestureInteraction={true}
                /> */}
                <View style={styles.headingView}>
                    <Text style={styles.txt1}>Sleep.</Text>
                    <TouchableOpacity style={styles.toucableheading}>
                        <Text style={styles.txt2}> 🤗 Say thanks</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.mainScroll}>
                <View style={styles.mainView}>
                    <View style={styles.logoView}> 
                    <Image source={require('../images/icons/logo.png')} style={{ height:150,width:150}}/>
                    </View>
                    <View style={styles.iconView}>
                        <Image source={require('../images/icons/heart.png')} style={{height:58, width:58}}/>
                        <Image source={require('../images/icons/download.png')} style={{height:58, width:58}}/>
                    </View>
                    <View style={styles.iconView}>
                        <Text style={styles.icontxt}>My Favourites</Text>
                        <Text style={styles.icontxt}>Downloads</Text>
                    </View>
                    <View style={{marginTop:'6%'}}>
                        <Text style={styles.subheadingtxt}>ALERTS</Text>
                            <TouchableOpacity style={{ width:'100%',height:65,backgroundColor:'#215e82',flexDirection:'row',marginTop:'2%', borderRadius:8}}>
                            <View style={{flex:4,alignItems:'center',paddingLeft:'3%',flexDirection:'row'}}>
                                <Image source={require('../images/icons/alarm-clock-of-circular-shape.png')} style={{height:35,width:35}}/>
                                <Text style={{color:'white',left:'18%',fontSize:14, fontWeight:'bold',paddingTop:'4%'}}> Alarm (OFF)</Text>
                            </View>
                            <View style={{flex:6,alignItems:'center',paddingRight:'4%',flexDirection:'row',justifyContent:'flex-end'}}>
                                <Text style={{color:'white',fontSize:14, fontWeight:'bold',paddingRight:'7%'}}> Set alarm</Text>
                                <IconLeft name='chevron-right' size={18} color='#41b2f3'/>
                            </View>
                            </TouchableOpacity>
                    </View>
                    <View style={{marginTop:'1%'}}>
                            <TouchableOpacity style={{ width:'100%',height:65,backgroundColor:'#215e82',flexDirection:'row',marginTop:'2%', borderRadius:8}}>
                            <View style={{flex:6,alignItems:'center',paddingLeft:'3%',flexDirection:'row'}}>
                                <Image source={require('../images/icons/bell.png')} style={{height:42,width:42}}/>
                                <Text style={{color:'white',left:'18%',fontSize:14, fontWeight:'bold'}}>Bed Time </Text>
                                <View>
                                <Text style={{color:'white',left:'18%',fontSize:14, fontWeight:'bold'}}>Reminder </Text>
                                </View>
                            </View>
                            <View style={{flex:4,alignItems:'center',paddingRight:'4%',flexDirection:'row',justifyContent:'flex-end'}}>
                                <Text style={{color:'white',fontSize:14, fontWeight:'bold',paddingRight:'7%'}}> Set bedtime</Text>
                                <IconLeft name='chevron-right' size={18} color='#41b2f3'/>
                            </View>
                            </TouchableOpacity>
                    </View>
                    <View style={{marginTop:'6%'}}>
                        <Text style={styles.subheadingtxt}>NOTIFICATIONS</Text>
                            <TouchableOpacity style={{ width:'100%',height:65,backgroundColor:'#215e82',flexDirection:'row',marginTop:'2%', borderRadius:8}}>
                            <View style={{flex:8,alignItems:'center',paddingLeft:'3%',flexDirection:'row'}}>
                                <Image source={require('../images/icons/notification.png')} style={{height:35,width:35}}/>
                                <Text style={{color:'white',left:'18%',fontSize:14, fontWeight:'bold'}}> Notifications and popups</Text>
                            </View>
                            <View style={{flex:2,alignItems:'center',paddingRight:'4%',flexDirection:'row',justifyContent:'flex-end'}}>
                                <IconLeft name='chevron-right' size={18} color='#41b2f3'/>
                            </View>
                            </TouchableOpacity>
                    </View>
                    <View style={{marginTop:'6%'}}>
                        <Text style={styles.subheadingtxt}>PAYMENTS</Text>
                            <TouchableOpacity style={{ width:'100%',height:65,backgroundColor:'#215e82',flexDirection:'row',marginTop:'2%', borderRadius:8}}>
                            <View style={{flex:8,alignItems:'center',paddingLeft:'3%',flexDirection:'row'}}>
                                <Image source={require('../images/icons/dollar-symbol.png')} style={{height:35,width:35}}/>
                                <Text style={{color:'white',left:'18%',fontSize:14, fontWeight:'bold'}}> Pay developers a tip</Text>
                            </View>
                            <View style={{flex:2,alignItems:'center',paddingRight:'4%',flexDirection:'row',justifyContent:'flex-end'}}>
                                <IconLeft name='chevron-right' size={18} color='#41b2f3'/>
                            </View>
                            </TouchableOpacity>
                    </View>
                    <View style={{marginTop:'1%'}}>
                            <TouchableOpacity style={{ width:'100%',height:65,backgroundColor:'#215e82',flexDirection:'row',marginTop:'2%', borderRadius:8}}>
                            <View style={{flex:8,alignItems:'center',paddingLeft:'3%',flexDirection:'row'}}>
                                <Image source={require('../images/icons/stacked-files.png')} style={{height:35,width:35}}/>
                                <Text style={{color:'white',left:'18%',fontSize:14, fontWeight:'bold'}}>Manage Subscription</Text>
                            </View>
                            <View style={{flex:2,alignItems:'center',paddingRight:'4%',flexDirection:'row',justifyContent:'flex-end'}}>
                                <IconLeft name='chevron-right' size={18} color='#41b2f3'/>
                            </View>
                            </TouchableOpacity>
                    </View>
                    <View style={{marginTop:'6%'}}>
                        <Text style={styles.subheadingtxt}>GENERAL</Text>
                            <TouchableOpacity onPress={() =>this.bs.current.snapPoints(0)}
                            style={{ width:'100%',height:65,backgroundColor:'#215e82',flexDirection:'row',marginTop:'2%', borderRadius:8}}>
                            <View style={{flex:6,alignItems:'center',paddingLeft:'3%',flexDirection:'row'}}>
                                <Image source={require('../images/icons/translate.png')} style={{height:35,width:35}}/>
                                <Text style={{color:'white',left:'18%',fontSize:14, fontWeight:'bold'}}> App Language</Text>
                            </View>
                            <View style={{flex:4,alignItems:'center',paddingRight:'4%',flexDirection:'row',justifyContent:'flex-end'}}>
                            <Text style={{color:'#41b2f3',fontSize:14,paddingRight:'7%'}}> English</Text>
                                <IconLeft name='chevron-right' size={18} color='#41b2f3'/>
                            </View>
                            </TouchableOpacity>
                    </View>
                    <View style={{marginTop:'1%'}}>
                            <TouchableOpacity style={{ width:'100%',height:65,backgroundColor:'#215e82',flexDirection:'row',marginTop:'2%', borderRadius:8}}>
                            <View style={{flex:8,alignItems:'center',paddingLeft:'3%',flexDirection:'row'}}>
                                <Image source={require('../images/icons/download.png')} style={{height:35,width:35}}/>
                                <Text style={{color:'white',left:'18%',fontSize:14, fontWeight:'bold'}}>Auto Download Favourites</Text>
                            </View>
                            <View style={{flex:2,alignItems:'center',paddingRight:'4%',flexDirection:'row',justifyContent:'flex-end'}}>
                            </View>
                            </TouchableOpacity>
                    </View>
                    <View style={{marginTop:'1%'}}>
                            <TouchableOpacity style={{ width:'100%',height:65,backgroundColor:'#215e82',flexDirection:'row',marginTop:'2%', borderRadius:8}}>
                            <View style={{flex:4,alignItems:'center',paddingLeft:'3%',flexDirection:'row'}}>
                                <Image source={require('../images/icons/star.png')} style={{height:35,width:35}}/>
                                <Text style={{color:'white',left:'18%',fontSize:14, fontWeight:'bold'}}>Rate us on Playstore</Text>
                            </View>
                            <View style={{flex:2,alignItems:'center',paddingRight:'4%',flexDirection:'row',justifyContent:'flex-end'}}>
                            </View>
                            </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:2,flexDirection:'row', justifyContent:'space-around', marginTop:'8%', marginBottom:'8%'}}>
                    <TouchableOpacity style={{ alignItems:'center', backgroundColor:'#215e82',height:45, borderRadius:5,justifyContent:'center',width:'30%'}} > 
                        <Text style={{color:'white',fontSize:14, fontWeight:'900'}}>SHARE APP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center', backgroundColor:'#215e82',height:45, borderRadius:5, justifyContent:'center',width:'30%'}}>
                        <Text style={{color:'white',fontSize:14, fontWeight:'900'}}>SUPPORT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center', backgroundColor:'#215e82',height:45, borderRadius:5,justifyContent:'center',width:'30%'}}>
                        <Text style={{color:'white',fontSize:14, fontWeight:'900'}}>GO OFFLINE</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex:4, marginBottom:'6%',marginRight:'4%',marginLeft:'4%'}}>
                    <View style={{flexDirection:'row',width:'100%'}}>
                        <Text style={styles.subheadingtxt}>LOGIN WITH </Text>
                        <Divider style={{ backgroundColor: '#41b2f3' ,flex:1,marginTop:'3%'}} />
                    </View>
                    <TouchableOpacity style={{flex:1,marginTop: '4%',width: '100%',borderWidth: 1,backgroundColor: 'white',height: 58, borderRadius: 10, flexDirection:'row',alignItems:'center'}} >
                            <View style={{flex:2,alignItems:'center'}}>
                            <Image source={require('../images/icons/search.png')} style={{ height: 25, width: 25}} />
                            </View>
                            <View style={{flex:6,alignItems:'center'}}>
                                <Text style={{ fontSize:14,color:'#00213c',fontWeight:'bold'}}> Google</Text>
                                </View>
                            <View style={{flex:2}}></View>
                    </TouchableOpacity>
                    <View style={{flex:1, alignItems:'center',justifyContent:'center',marginTop:'3%'}}>
                        <Text style={{color:'white',fontSize:14, fontWeight:'bold'}} > 0.61</Text>
                    </View>
                        
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
        borderTopWidth: 0.5,
        borderColor: '#41b2f3',
        position: 'relative'

    },

    bgimage: {
        width: '100%',
        height: '70%',
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
        backgroundColor: '#0a2349',
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
    mainScroll: {
        position: 'absolute',
        height: '95%',
        marginTop: '15%',
        width:'100%',
    },
    mainView:{
        flex:8,
        marginLeft:'4%',
        marginRight:'4%'
    },
    logoView:{
        alignItems:'center' ,
        justifyContent:'center',
        marginBottom:'6%'

    },
    iconView:{
        flexDirection:'row', 
        justifyContent:'space-around',
        marginBottom:'2%'
    },
    icontxt:{
        fontSize:12,
        // fontFamily: 'Avenir Next W05,Avenir,Helvetica Neue,Helvetica,Arial,sans-serif',
        color:'white'
    },
    subheadingtxt:{
        fontSize:12,
        // fontFamily:'Avenir Next W05,Avenir,Helvetica Neue,Helvetica,Arial,sans-serif',
        color:'#41b2f3'
        }
        
});