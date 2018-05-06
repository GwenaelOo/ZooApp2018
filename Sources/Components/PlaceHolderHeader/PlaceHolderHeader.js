import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class PlaceHolderHeader extends React.Component {
  render() {
    return (
      <View style={styles.PlaceHolderHeader}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  PlaceHolderHeader: {
    width: '100%',
    backgroundColor: 'blue',
    height: 25,
  },
  TextStyle:{
      color: "white",
  }
});

export default PlaceHolderHeader
