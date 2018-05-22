import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AnimalListRoundItem from './AnimalListRoundItem';


class AnimalListRound extends React.Component {
    render() {

        let animalsOfThisSpecie = this.props.animalsOfThisSpecie

        const animalsOfThisSpecieArray = [];
        for (let animal in animalsOfThisSpecie) {
            let animalData = {
                animalId: animalsOfThisSpecie[animal].animalId,
                animalProfilePicture: animalsOfThisSpecie[animal].animalProfilePicture,
                animalName: animalsOfThisSpecie[animal].animalName,
                animalSex: animalsOfThisSpecie[animal].animalSex,
                animalAge: animalsOfThisSpecie[animal].animalAge,
                specieId: animalsOfThisSpecie[animal].specieId,
            };
            animalsOfThisSpecieArray.push(animalData);
        }

        return (
            <View style={styles.AnimalsList}>
                {
                    animalsOfThisSpecieArray.map(function (animal) { return <AnimalListRoundItem animal={animal} key={animal.animalId}/>; })
                }
            </View>

        );
    }
}


const styles = StyleSheet.create({
    AnimalsList: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        alignItems: "center",
        marginHorizontal: 25
    },
});


export default AnimalListRound

