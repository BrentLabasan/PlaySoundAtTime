import React from 'react';
import { Alert, Button, ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Playlists',
  };

  render() {
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
              Alert.alert('You tapped the button!');
            }}
            title="+ >Sound@Time Block"
          />
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
  }
});
