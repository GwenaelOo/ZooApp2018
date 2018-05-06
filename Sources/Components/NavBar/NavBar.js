import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class NavBar extends React.Component {
  render() {
    return (
      <View style={styles.NavBar}>
   
        <Text style={styles.TextStyle}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  NavBar: {
    width: '100%',
    backgroundColor: '#F8F8F8',
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    borderBottomColor: '#bbb',
    borderBottomWidth : StyleSheet.hairlineWidth,

  },
  TextStyle:{
      color: "#5E7FB1",
      fontSize: 16
      
  }
});

export default NavBar
