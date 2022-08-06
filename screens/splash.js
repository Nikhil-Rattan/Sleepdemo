import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native'
import LottieView from 'lottie-react-native';


const bg = require('../images/bgimages/moon.png');

export default class splash extends Component {

  componentDidMount() {
    this.animation.play();
    this.animation.play(5, 120);
  }

  componentDidMount() {
    setTimeout(async () => {
      this.props.navigation.replace('Home')
    }, 4000);
  }

  render() {
    return (
      <View style={styl.container}>
      <ImageBackground source={bg} style={styl.img}>
        <View style={styl.imgView}>
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            source={require('../assets/sleep_logo_.json')}
            autoPlay
            loop={false}
            speed={0.2}
            onAnimationFinish={() => {
              <Text> 68,047 people are listening to Calm Sleep Sound right now</Text>
            }
            }
          />
          </View>
      </ImageBackground>
      </View>
    );
  }
}

const styl = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#00213c',
  },
  img: {
    flex:1,
    width:'100%',
    height:'65%'
  },
  imgView:{
    height:'70%'
  }

});
