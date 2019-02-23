import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import { Audio } from 'expo';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
  }

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

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello sound!</Text>

        <Button
        onPress={this.blah}
        title="Learn More"
        color="#841584"
      />
      </View>

    );
  }
}
