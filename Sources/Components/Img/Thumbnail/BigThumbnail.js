import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class BigThumbnail extends React.Component {
    render() {
        return (
             <Image
                            style={{ width: 100, height: 100, borderRadius: 50, marginTop: 10, marginLeft: 35 }}
                            source={{ uri: this.props.uri }}
                        />   
        );
    }
}

export default BigThumbnail