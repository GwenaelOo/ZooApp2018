import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class BigThumbnail extends React.Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} delayPressIn={1}>
             <Image
                            style={{ width: 100, height: 100, borderRadius: 50, marginTop: 10, marginLeft: 35 }}
                            source={{ uri: this.props.uri }}
                        />
            </TouchableOpacity>
        );
    }
}

export default BigThumbnail