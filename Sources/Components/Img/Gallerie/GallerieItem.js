import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

class Gallerie extends React.Component {
    render() {
        return (
            <View style={{ marginLeft: 5 }}>
                <TouchableOpacity activeOpacity={0.5} delayPressIn={75}>
                    <Image
                        style={{ width: 150, height: 150 }}
                        source={{ uri: this.props.photo.photoURL} }
                    />
                </TouchableOpacity>
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

