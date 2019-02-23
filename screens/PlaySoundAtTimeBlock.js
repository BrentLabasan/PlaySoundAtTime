import React from 'react';
import { Alert, Button, DatePickerAndroid, ScrollView, StyleSheet, Text, TimePickerAndroid, View } from 'react-native';
import { DocumentPicker } from 'expo';
import moment from 'moment';

import TimeFormat from '../constants/TimeFormat.js';



export default class PlaySoundAtTimeBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fileMetaData: {
        uri: "path/is/empty",
        name: "name is empty",
        size: "size is empty"
      },
      playAtTime: "CLICK TO SET TIME"
    };
  }

  async setPlayAtTime() {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false, // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        // Selected hour (0-23), minute (0-59)
        this.setState({
          playAtTime: moment(hour + ":" + minute + ":" + "00", TimeFormat).format(TimeFormat)
        });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  }

  async setSoundsFilePath() {
    try {
      const { type, uri, name, size } = await DocumentPicker.getDocumentAsync({
        type: 'audio/*',
        copyToCacheDirectory: true
      });
      if (type === 'success') {
        this.setState({
          fileMetaData: {
            uri: uri,
            name: name,
            size: size
          }
        });
      }
      console.log("uri", uri);
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  }

  render() {

    return (

      <View style={styles.playSoundAtTimeBlock}>
        <Text>
          {/* {this.props.id} */}
          {this.state.fileMetaData.uri}
        </Text>

        <Button
          onPress={() => {
            this.setSoundsFilePath();
          }}
          title={'Select Sound File'}
        />


        <Text>
          Play At Time: {this.state.playAtTime}
        </Text>

        <Button
          onPress={() => {
            this.setPlayAtTime();
          }}
          title={this.state.playAtTime}
        />
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
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  topButton: {
    paddingLeft: 15,
    paddingRight: 15,
  }
});
