import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Audio } from 'expo';

import source from './a.wav';

export default class HelloWorldApp extends Component {
  async blah() {
    try {
      const { sound: soundObject, status } = await Audio.Sound.createAsync(
        require('./a.wav'),
        { shouldPlay: true }
      );
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }
  
  render() {
    this.blah();

    const soundObject = new Audio.Sound();
    // soundObject.loadAsync(require(source));
    // soundObject.loadAsync(require('../assets/sounds/alert-06.wav'));
    soundObject.loadAsync(require('./a.wav'));
    soundObject.playAsync;

    

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello sound!</Text>
      </View>
    );
  }
}
