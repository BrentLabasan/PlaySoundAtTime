import React from 'react';
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
const uuidv4 = require('uuid/v4');

import PlaySoundAtTimeBlock from './PlaySoundAtTimeBlock.js';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Playlists'
  };

  constructor(props) {
    super(props);

    this.state = {
      playlist: []
    }
  }

  createBlock() {
    let joined = this.state.playlist.concat({ key: uuidv4() });
    this.setState({
      playlist: joined
    });
  }

  render() {
    let blocks = this.state.playlist.map((block) => {
      return <PlaySoundAtTimeBlock key={block.key} id={block.key} />;
    });

    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}

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
