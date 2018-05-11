import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { withNavigation } from 'react-navigation';


class GalleryItem extends React.Component {
    constructor(props) {
        super(props);
        
       this.HandlePress = this.HandlePress.bind(this)
    }
    HandlePress(){
       this.props.navigation.navigate('MyModal', {
        selectedPhotoId : this.props.photo.photoId,
        selectedPhotoURL : this.props.photo.photoURL,
    })
    }

    render() {
        return (
            <View style={{ marginLeft: 5 }}>
                <TouchableOpacity activeOpacity={0.5} delayPressIn={75} onPress={this.HandlePress}>
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

export default withNavigation(GalleryItem);


