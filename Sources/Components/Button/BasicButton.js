import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {colors} from '../../Theme/Theme';

class BasicButton extends React.Component {
    render() {
        return (
            <TouchableOpacity>
            <View style={{ marginTop: 15, backgroundColor: "#fff", paddingVertical: 5, borderColor: '#bbb', borderWidth: StyleSheet.hairlineWidth }}>
                <Text style={{ color: colors.BUTTON_COLOR, fontSize: 16, fontWeight: "bold", marginHorizontal: 10, textAlign: 'center' }}>
                    {this.props.text}
              </Text>
            </View>
            </TouchableOpacity>
        );
    }
}

export default BasicButton
