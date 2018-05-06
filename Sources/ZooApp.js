import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './Screens/Dashboard/Dashboard'


//import ActiveScreen from './Screens/ScreenAnimal/ScreenAnimal';
import ActiveScreen from './Screens/ScreenSpecie/ScreenSpecie';
//import ActiveScreen from './Screens/ScreenList/ScreenList';
//import ActiveScreen from './Screens/ScreenSpeciesList/ScreenSpeciesList';

export default class ZooApp extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <ActiveScreen />
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
    width: "100%"
  },
});
