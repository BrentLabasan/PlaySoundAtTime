import React from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default class PlaySoundAtTimeBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      soundFilePath: "/song/path"
    };
  }

  render() {

    return (

      <View style={styles.containerTopButtons}>
        <Text>
        {this.props.id}
        {this.state.soundFilePath}
        </Text>
      </View>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  containerTopButtons: {
    // padding: '0 15 0 15',
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  topButton: {
    paddingLeft: 15,
    paddingRight: 15,
  }
});
