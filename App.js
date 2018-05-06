import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ZooApp from './Sources/ZooApp'

export default class App extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <ZooApp />
    </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
