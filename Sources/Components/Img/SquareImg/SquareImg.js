import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class SquareImg extends React.Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} delayPressIn={75}>
            <Image
                    style={{ width: 150, height: 150}}
                    source={{ uri: this.props.uri }}
                />
            </TouchableOpacity>
        );
    }
}

export default SquareImg

