import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class MiniThumbnail extends React.Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} delayPressIn={1}>
             <Image
                            style={{ width: 50, height: 50, borderRadius: 25}}
                            source={{ uri: this.props.uri }}
                        />
            </TouchableOpacity>
        );
    }
}

export default MiniThumbnail