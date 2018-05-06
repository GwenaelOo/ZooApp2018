import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import SquareImg from '../SquareImg/SquareImg'
import GallerieItem from './GallerieItem'


class Gallerie extends React.Component {
    render() {

        let PhotoPropsList = this.props.photos
        console.log("avant traitement")
        console.log(PhotoPropsList)

        const PhotoListToDisplay = [];
        for (let photo in PhotoPropsList) {
            let PhotoData = {
                photoId: PhotoPropsList[photo].photoId,
                photoURL: PhotoPropsList[photo].photoURL,
            };
            PhotoListToDisplay.push(PhotoData);
        }

        console.log("apres traitement")
        console.log(PhotoListToDisplay)

        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.SpecieGallery}>
                    {
                        PhotoListToDisplay.map(function (photo) { return <GallerieItem photo={photo} />; })
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

