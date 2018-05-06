import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../Theme/Theme';


class LargeSeparator extends React.Component {
  render() {
    return (
      <View style={styles.LargeSeparator}>
        <Text style={styles.TextStyle}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  LargeSeparator: {
    width: '100%',
    backgroundColor: colors.SEPARATOR_BACKGROUND_COLOR,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  
  
  },
  TextStyle:{
      color: fonts.TITLE_FONT_COLOR,
      fontSize: 24,
      fontWeight: "bold"
      
  }
});

export default LargeSeparator
