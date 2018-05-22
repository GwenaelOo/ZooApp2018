import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { withMappedNavigationProps } from 'react-navigation-props-mapper'

import { config } from '../../Config/Config'
import PlaceHolderHeader from '../../Components/PlaceHolderHeader/PlaceHolderHeader';
import NavBar from '../../Components/NavBar/NavBar';
import LargeSeparator from '../../Components/LargeSeparator/LargeSeparator';
import BasicButton from '../../Components/Button/BasicButton';
import SquareImg from '../../Components/Img/SquareImg/SquareImg';
import Title from '../../Components/Text/Title/Title';
import LightTitle from '../../Components/Text/LightTitle/LightTitle';
import WidgetSocial from '../../Widget/WidgetSocial';
import { colors } from '../../Theme/Theme';
import HeartIcon from '../../Icons/Heart/HeartIcon';
import { TextTool } from '../../Theme/style';
import Gallerie from '../../Components/Img/Gallerie/Gallerie';

import * as firebase from 'firebase';


const rawData = require('../../Assets/data.json');
const localData = rawData[config.zooId]

class ScreenAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            animalId: '',
            animalName: '',
            animalSpecieName: '',
            specieId: '',
            animalBiography: '',
            animalAge: '',
            animalSex: '',
            animalPhotoProfil: '',
            animalPhotos: {},
        };
    }

    fetchAnimalLocalData(animalData) {

        this.setState({
            animalName: animalData.animalName,
            animalId: animalData.animalId,
            animalName: animalData.animalName,
            animalSpecieName: animalData.animalSpecieName,
            specieId: animalData.specieId,
            animalBiography: animalData.animalBiography,
            animalAge: animalData.animalAge,
            animalSex: animalData.animalSex,
            animalPhotoProfil: animalData.animalPhotoProfil,
        })
        if (animalData.animalPhotos.length > 0)  {
            this.setState({
                animalPhotos: animalData.animalPhotos,
                galleryDisplay: true
            })
        }
    }

    fetchAnimalRemoteData(specieId, animalId) {

        console.log(specieId)

        var ref = firebase.database().ref(config.zooId + '/speciesData/' + specieId);
        ref.once('value')

            .then(result => {
                let remoteData = result.val()
                let animalRemoteData = remoteData.specieAnimals.find(item => item.animalId === animalId)

                console.log(animalRemoteData.animalName)

                this.setState({
                    animalName: animalRemoteData.animalName,
                    animalId: animalRemoteData.animalId,
                    animalName: animalRemoteData.animalName,
                    animalSpecieName: animalRemoteData.animalSpecieName,
                    specieId: animalRemoteData.specieId,
                    animalBiography: animalRemoteData.animalBiography,
                    animalAge: animalRemoteData.animalAge,
                    animalSex: animalRemoteData.animalSex,
                    animalProfilePicture: animalRemoteData.animalProfilePicture,
                })
                if (animalRemoteData.animalPhotos.length > 0)  {
                    this.setState({
                        animalPhotos: animalRemoteData.animalPhotos,
                        galleryDisplay: true
                    })
                }
            })
    }

    getOnlineDataVersion(specieId, animalId) {

        refId = specieId - 1

        var ref = firebase.database().ref(config.zooId + '/speciesData/' + refId);
        ref.once('value')

            .then(result => {


                let remoteData = result.val()
                let animalRemoteData = remoteData.specieAnimals.find(item => item.animalId === animalId)

                this.setState({
                    remoteDataVersion: animalRemoteData.dataVersion
                })
            })
            .then(result => {
                this.shouldUpdate()
            })
    }

    shouldUpdate() {

        console.log('Local data version ', this.state.localDataVersion)
        console.log('Remote data version ', this.state.remoteDataVersion)

        if (this.state.remoteDataVersion > this.state.localDataVersion) {
            console.log('Mise à jour des données')
            console.log(this.state.specieId, this.state.animalId)
            this.fetchSpecieRemoteData(this.state.specieId, this.state.animalId)
        }
    }


    checkDataVersion(specieId, animalId) {

        console.log('check data version for the specieId', specieId)
        // Recuperation de la dataversion local
  

        let animalData = specieData.specieAnimals[0].find(item => item.animalId === animalId)

        console.log(animalData)

        this.setState({
            localDataVersion: animalData.dataVersion,
            specieId: specieId,
            animalId: animalId,
        })


        this.getOnlineDataVersion(specieId, animalId)
     }


    checkItemLocation(specieId, animalId) {

        //let specieData = localData.speciesData.find(item => item.specieId === specieId)
        //let animalData = specieData.specieAnimals[animalId]

        //let specieData = localData.speciesData[specieId - 1]

        console.log(specieId)

        let specieData = localData.speciesData[specieId]

        console.log('specie data')
        console.log(specieData)
        
        if (specieData == null) {
            console.log('data online')
            this.fetchAnimalRemoteData(specieId, animalId)
        } else {
            console.log('data local')
            this.fetchAnimalLocalData(animalData)
            this.checkDataVersion(specieId, animalId)
        }
    }

    componentDidMount() {
        console.log('test props')
        console.log(this.props.navigation.state.params.specieId)
       this.checkItemLocation(this.props.navigation.state.params.specieId, this.props.navigation.state.params.animalId)
     
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.SpecieIntro}>
                        <Image
                            style={{ width: this.state.width, height: (this.state.height / 2.5) }}
                            source={{ uri: this.state.animalProfilePicture }}
                        />

                        <View style={{ marginTop: 10 }}>
                            <Title text={this.state.animalName} size="big" style={{ marginLeft: 0, marginTop: 10 }} />
                        </View>
                        <View style={{ display: "flex", width: this.state.width }}>
                            <View style={{ display: "flex", width: "95%", flexDirection: "row", justifyContent: "space-between", marginTop: 25, paddingHorizontal: 25 }}>

                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Title text="5" size="medium-noMargin" />
                                    <LightTitle text="ans" />
                                </View>

                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Title text="82" size="medium-noMargin" />
                                    <LightTitle text="amis" />
                                </View>


                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Title text="4" size="medium-noMargin" />
                                    <LightTitle text="enfants" />
                                </View>

                            </View>
                        </View>

                    </View>

                    <LargeSeparator text="Biographie" />

                    <Text style={[TextTool.PARAGRAPH, { marginHorizontal: 20 }]}>
                        {this.state.animalBiography}
                    </Text>
                  
                        <BasicButton text="En savoir plus" width="150" />
                        <BasicButton text="Faire un don" width="150" />

                    {this.state.galleryDisplay ? <LargeSeparator text="Gallerie"/> : null}
                    {this.state.galleryDisplay ? <Gallerie photos={this.state.animalPhotos}/> : null}

                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.BACKGROUND_COLOR,
        alignItems: 'center',
    },
    SpecieIntro: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",


    },
    SpecieGallery: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        alignItems: "center",
        marginBottom: 25

    },
});

export default ScreenAnimal

