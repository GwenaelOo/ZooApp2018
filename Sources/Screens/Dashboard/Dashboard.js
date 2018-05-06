import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlaceHolderHeader from '../../Components/PlaceHolderHeader/PlaceHolderHeader';

class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PlaceHolderHeader text='Liste des espèces' />
        <Text>Home Screen :)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
  
  },
});

export default Dashboard
