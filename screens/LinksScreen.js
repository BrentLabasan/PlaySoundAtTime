import React from 'react';
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {AsyncStorage} from 'react-native';
import moment from 'moment';

import TimeFormat from '../constants/TimeFormat.js';

const timeFormat = TimeFormat; 

const uuidv4 = require('uuid/v4');

import PlaySoundAtTimeBlock from './PlaySoundAtTimeBlock.js';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Playlists'
  };

  _storeData = async () => {
    try {
      await AsyncStorage.setItem( 'appJson', 'I like to save it.' + moment().format(timeFormat) );
    } catch (error) {
      // Error saving data
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('appJson');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      playlist: [],
      currentTime: moment().format(timeFormat)
    }
  }

  componentDidMount() {
    console.log("LinksScreen.js componentDidMount()");

    this._storeData();
    this._retrieveData();

    setInterval(() => {
      this.setState({
        currentTime: moment().format(timeFormat)
      });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("LinksScreen.js componentDidUnmount()");
  }

  createBlock() {
    let joined = this.state.playlist.concat({ key: uuidv4() });
    this.setState({
      playlist: joined
    });
  }

  render() {
    let blocks = this.state.playlist.map((block) => {
      return <PlaySoundAtTimeBlock
        key={block.key}
        id={block.key}
        navigation={this.props.navigation}
        currentTime={this.state.currentTime}
      />;
    });

    const { navigate } = this.props.navigation;

    console.log("LinksScreen.js", this.props.navigation);

    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}

        <View style={styles.containerTopButtons}>
        <Button
          onPress={() => {
            // () => this.props.navigation.navigate('Home');
            // () => this.props.navigation.goBack()
            // () => this.props.navigation.actions.pop()
            this.props.navigation.navigate('Home')
            console.log("pressed1");
          }}
          title={'Go To Settings'}
        />
        </View>

        <View style={styles.containerTopButtons}>
        

          <Button
            style={styles.topButton}
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="+ Playlist"
          />

          <Button
            style={styles.topButton}
            onPress={() => {
              // Alert.alert('You tapped the button!');
              this.createBlock();
            }}
            title="+ >Sound@Time Block"
          />
        </View>

        <View>

          {/* <FlatList
            data={this.state.playlist}
            // renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}

            // doesn't work
            // renderItem={() => <PlaySoundAtTimeBlock></PlaySoundAtTimeBlock>}
          /> */}

          {blocks}


        </View>

      </ScrollView>

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
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
