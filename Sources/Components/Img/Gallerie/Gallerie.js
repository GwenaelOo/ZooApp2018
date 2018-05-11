import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import SquareImg from '../SquareImg/SquareImg'
import GalleryItem from './GallerieItemWithNavigation'

class Gallerie extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let PhotoPropsList = this.props.photos

        const PhotoListToDisplay = [];
        for (let photo in PhotoPropsList) {
            let PhotoData = {
                photoId: PhotoPropsList[photo].photoId,
                photoURL: PhotoPropsList[photo].photoURL,
            };
            PhotoListToDisplay.push(PhotoData);
        }
        return (
            
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.SpecieGallery}>
                    {
                        PhotoListToDisplay.map(function (photoItem) { return <GalleryItem photo={photoItem} HandleSelectedItem={this.HandleSelected} />; }, this)
                    }
                </View>
            </ScrollView>
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

