import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import SquareImg from '../SquareImg/SquareImg'

class Gallerie extends React.Component {
    render() {
        return (
            <View style={{ marginLeft: 5 }}> 
                <SquareImg uri={this.props.photo.photoURL} /> })
            </View>
        );
    }
}

const styles = StyleSheet.create({
    SpecieGallery: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",

    }
});


export default Gallerie

