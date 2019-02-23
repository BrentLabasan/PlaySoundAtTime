import React from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';


export default class PlaySoundAtTimeBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      soundFilePath: "/song/path",
      playAtTime: "CLICK TO SET TIME"
    };
  }

  render() {

    return (

      <View style={styles.playSoundAtTimeBlock}>
        <Text>
        {/* {this.props.id} */}
        {this.state.soundFilePath}
        </Text>


        <Text>
          Play At Time: {this.state.playAtTime}
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
  playSoundAtTimeBlock: {
    // padding: '0 15 0 15',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F3F3F3',

    paddingTop: 15,
    paddingBottom: 15,
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
