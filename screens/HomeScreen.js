import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image,SafeAreaView } from 'react-native';

const bg = require('../images/icons/homebg.jpeg');


const recentImages = [
    require('../images/recent/into-the-magic-shop.jpeg'),
    require('../images/recent/the-far-north-line.jpeg'),
    require('../images/recent/rideway.jpeg'),
    require('../images/recent/the-ocean-moon.jpg'),
    require('../images/recent/the-emerald-isle.jpeg'),
    require('../images/recent/green-planet.jpeg'),
    require('../images/recent/twilight-to-moonlight.jpeg'),
    require('../images/recent/wow.jpeg'),
];

const expertPicks = [
    require('../images/expert/sleepy-farm.jpeg'),
    require('../images/expert/land-of-nod.jpeg'),
    require('../images/expert/pillow-thief.jpeg'),
    require('../images/expert/turtle-dreamer.jpeg'),
    require('../images/expert/blue-gold.jpeg'),
    require('../images/expert/flynn.jpeg'),
    require('../images/expert/midnight-sun.jpeg'),
    require('../images/expert/magic-muir-woods.jpeg'),
];

const mustlisten = [
    require('../images/recent/wow.jpeg'),
    require('../images/recent/into-the-magic-shop.jpeg'),
    require('../images/expert/turtle-dreamer.jpeg'),
    require('../images/expert/pillow-thief.jpeg'),
    require('../images/expert/blue-gold.jpeg'),
    require('../images/recent/the-far-north-line.jpeg'),
    require('../images/expert/flynn.jpeg'),
    require('../images/expert/midnight-sun.jpeg'),
];

const sleepStories = [
    require('../images/stories/disney.jpeg'),
    require('../images/stories/sky-moon.jpeg'),
    require('../images/stories/cloud-mountain.jpeg'),
    require('../images/stories/mountain-view.jpeg'),
    require('../images/stories/sky-halfmoon.jpeg'),
    require('../images/stories/see-saw.jpeg'),
    require('../images/stories/arnies.jpeg'),
    require('../images/stories/liminal.jpeg'),
];

const sleepMeditation = [
   require('../images/meditation/sleep-earphones.jpeg'),
   require('../images/meditation/seaView.jpeg'),
   require('../images/meditation/fields.jpeg'),
   require('../images/meditation/meditation.jpeg'),
   require('../images/meditation/leaves.jpeg'),
   require('../images/meditation/mountainView.jpeg'),
   require('../images/meditation/jungle.jpeg'),
   require('../images/meditation/bedtime.jpeg'),
];

export default class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={bg} style={styles.bgimage}>
                    <View style={styles.headingView}>
                        <Text style={styles.txt1}>Sleep.</Text>
                        <TouchableOpacity style={styles.toucableheading}>
                            <Text style={styles.txt2}> 🤗 Say thanks</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                <ScrollView style={styles.mainScroll}>

                    <ScrollView style={styles.spacing} >
                        <View style={styles.headingView}>
                            <Text style={styles.headingLeft}>Recently Played</Text>
                            <TouchableOpacity>
                                <Text style={styles.headingRight}> View All</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.scrollheading}>
                                {recentImages.map((item) => {
                                    return (
                                        <TouchableOpacity style={styles.imgView}>
                                            <Image style={styles.img}
                                                source={item} />
                                        </TouchableOpacity>)
                                })
                                }
                            </View>
                        </ScrollView>
                    </ScrollView>

                    <ScrollView>
                        <View style={styles.headingView}>
                            <Text style={styles.headingLeft}>Expert Picks</Text>
                            <TouchableOpacity>
                                <Text style={styles.headingRight}> View All</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.scrollheading}>
                                {expertPicks.map((item) => {
                                    return (
                                        <TouchableOpacity style={styles.imgView}>
                                            <Image style={styles.img}
                                                source={item} />
                                        </TouchableOpacity>)
                                })
                                }
                            </View>
                        </ScrollView>
                    </ScrollView>

                    <ScrollView>
                        <View style={styles.headingView}>
                            <Text style={styles.headingLeft}>People are listening to</Text>
                            <TouchableOpacity>
                                <Text style={styles.headingRight}> View All</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.scrollheading}>
                                {mustlisten.map((item) => {
                                    return (
                                        <TouchableOpacity style={styles.imgView}>
                                            <Image style={styles.img}
                                                source={item} />
                                        </TouchableOpacity>)
                                })
                                }
                            </View>
                        </ScrollView>
                    </ScrollView>

                    <ScrollView>
                        <View style={styles.headingView}>
                            <Text style={styles.headingLeft}>Sleep Stories</Text>
                            <TouchableOpacity>
                                <Text style={styles.headingRight}> View All</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.scrollheading}>
                                {sleepStories.map((item) => {
                                    return (
                                        <TouchableOpacity style={styles.imgView}>
                                            <Image style={styles.img}
                                                source={item} />
                                        </TouchableOpacity>)
                                })
                                }
                            </View>
                        </ScrollView>
                    </ScrollView>

                    <ScrollView>
                        <View style={styles.headingView}>
                            <Text style={styles.headingLeft}>Sleep Stories</Text>
                            <TouchableOpacity>
                                <Text style={styles.headingRight}> View All</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom:'15%'}}>
                            <View style={styles.scrollheading}>
                                {sleepMeditation.map((item) => {
                                    return (
                                        <TouchableOpacity style={styles.imgView}>
                                            <Image style={styles.img}
                                                source={item} />
                                        </TouchableOpacity>)
                                })
                                }
                            </View>
                        </ScrollView>
                    </ScrollView>

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
    headingLeft: {
        fontSize: 16,
        // fontFamily: 'Avenir Next W05,Avenir,Helvetica Neue,Helvetica,Arial,sans-serif',
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '4%',

    },
    headingRight: {
        fontSize: 14,
        // fontFamily: 'Avenir Next W05,Avenir,Helvetica Neue,Helvetica,Arial,sans-serif',
        color: '#41b2f3',
        fontWeight: 'bold',
        marginRight: '3%',
    },
    spacing: {
        paddingTop: '60%'
    },
    mainScroll: {
        flex:1,
        position: 'absolute',
        height: '95%',
        marginTop: '15%',
    },
    scrollheading: {
        flexDirection: 'row',
        marginTop: '1.5%'
    },
    img: {
        resizeMode: 'cover',
        height: 200,
        width: 150,
        borderRadius: 4
    },
    imgView: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: '2%'

    },

});