import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import PlaceHolderHeader from '../../Components/PlaceHolderHeader/PlaceHolderHeader';
import NavBar from '../../Components/NavBar/NavBar';
import LargeSeparator from '../../Components/LargeSeparator/LargeSeparator';
import BasicButton from '../../Components/Button/BasicButton';
import SquareImg from '../../Components/Img/SquareImg/SquareImg';
import BigThumbnail from '../../Components/Img/Thumbnail/BigThumbnail';
import MiniThumbnail from '../../Components/Img/Thumbnail/MiniThumbnail';
import Title from '../../Components/Text/Title/Title';
import LightTitle from '../../Components/Text/LightTitle/LightTitle';
import WidgetSocial from '../../Widget/WidgetSocial';
import { colors } from '../../Theme/Theme';
import HeartIcon from '../../Icons/Heart/HeartIcon';
import { TextTool } from '../../Theme/style';
import BlogPost from '../../Components/BlogPost/BlogPost';
import Gallerie from '../../Components/Img/Gallerie/Gallerie';
import AnimalListRoundItem from '../../Components/AnimalView/AnimalListRound/AnimalListRoundItem';
import AnimalListRound from '../../Components/AnimalView/AnimalListRound/AnimalListRound';
import {config} from '../../Config/Config'

import * as firebase from 'firebase';

const rawData = require('../../Assets/data.json');
const localData = rawData[config.zooId]

class SpecieScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            specieId: '',
            specieName: '',
            specieLatinName: '',
            specieEnglishName: '',
            specieClass: '',
            specieOrder: '',
            specieFamilly: '',
            specieIUCNClassification: '',
            specieDescription: '',
            specieGestation: '',
            specieWeight: '',
            specieLifeExpectancy: '',
            specieFood: [],
            specieProfilePicture: '',
            speciePhoto1: 'https://www.thoiry.net/sites/thoiry.net/files/2018-02/grand%20sourir%20panda.jpg',
            speciePhoto2: 'https://s3.eu-central-1.amazonaws.com/zooparc/assets/stars/panda_roux_1504.jpg',
            speciePhoto3: 'https://img3.telestar.fr/var/telestar/storage/images/3/0/7/8/3078326/le-panda-roux-espece-danger-dans-doumentaire-petit-panda-himalaya-sur-chaine-arte_width1024.jpg',
            speciePhoto4: 'https://www.thoiry.net/sites/thoiry.net/files/2018-02/panda%20roux%202.jpg',
            speciePhotos: {},
            specieAnimals: {}
        };
    }

    fetchSpecieRemoteData(itemId) {

        let refId = itemId - 1

        var ref = firebase.database().ref(config.zooId + 'speciesData/' + refId);
        ref.once('value')

            .then(result => this.setState({
                remoteData: result.val()
            }))

            .then(result => this.mergeRemoteAndLocalData(this.state.remoteData));
    }

    mergeRemoteAndLocalData = (remoteData) => {
        console.log('hey')
        this.setState({
            specieId: remoteData.specieId,
            specieName: remoteData.specieName,
            specieLatinName: remoteData.specieLatinName,
            specieEnglishName: remoteData.specieEnglishName,
            specieClass: remoteData.specieClass,
            specieOrder: remoteData.specieOrder,
            specieFamilly: remoteData.specieFamilly,
            specieIUCNClassification: remoteData.specieIUCNClassification,
            specieDescription: remoteData.specieDescription,
            specieGestation: remoteData.specieGestation,
            specieWeight: remoteData.specieWeight,
            specieLifeExpectancy: remoteData.specieLifeExpectancy,
            specieFood: remoteData.specieFood,
            specieProfilePicture: remoteData.specieProfilePicture,
            speciePhotos: remoteData.speciePhotos,
            specieAnimals: remoteData.specieAnimals,
        })
    }

    fetchSpecieLocalData(specieId) {

        let specieData = localData.speciesData.find(item => item.specieId === specieId)

        this.setState({
            specieId: specieData.specieId,
            specieName: specieData.specieName,
            specieLatinName: specieData.specieLatinName,
            specieEnglishName: specieData.specieEnglishName,
            specieClass: specieData.specieClass,
            specieOrder: specieData.specieOrder,
            specieFamilly: specieData.specieFamilly,
            specieIUCNClassification: specieData.specieIUCNClassification,
            specieDescription: specieData.specieDescription,
            specieGestation: specieData.specieGestation,
            specieWeight: specieData.specieWeight,
            specieLifeExpectancy: specieData.specieLifeExpectancy,
            specieFood: specieData.specieFood,
            specieProfilePicture: specieData.specieProfilePicture,
            speciePhotos: specieData.speciePhotos,
            specieAnimals: specieData.specieAnimals,

        })
    }

    getOnlineDataVersion(itemId) {

        let refId = itemId - 1

        var ref = firebase.database().ref(config.zooId + '/speciesData/' + refId);
        ref.once('value')

            .then(result => {
                let remoteData = result.val()
                this.setState({
                    remoteDataVersion: remoteData.dataVersion
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
            this.fetchSpecieRemoteData(this.state.specieId)
        }

    }

    checkDataVersion(specieId) {

        console.log('check data version for the specieId', specieId)
        // Recuperation de la dataversion local
        let specieData = localData.speciesData.find(item => item.specieId === specieId)
        
        this.setState({
            localDataVersion: specieData.dataVersion
        })
        this.getOnlineDataVersion(specieId)
    }

    checkItemLocation(specieId) {
        let specieData = localData.speciesData.find(item => item.specieId === specieId)
        if (specieData == null) {
            console.log('data online')
            this.fetchSpecieRemoteData(specieId)
        } else {
            console.log('data local')
            this.fetchSpecieLocalData(specieId)
            this.checkDataVersion(specieId)
        }
    }

    componentDidMount() {
        this.checkItemLocation(this.props.navigation.state.params.itemId)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.specieIntro}>
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 50, marginTop: 15, marginLeft: 35 }}
                            source={{ uri: this.state.specieProfilePicture }}
                        />
                        <View style={{ marginLeft: 24 }}>
                            <Title text={this.state.specieName} />
                            <LightTitle text={this.state.specieLatinName} />
                        </View>

                    </View>

                    <LargeSeparator text="A propos" />

                    <Text style={[TextTool.PARAGRAPH, { marginHorizontal: 20 }]}>
                        {this.state.specieDescription}
                        {this.state.specieId}
                    </Text>

                    <BasicButton text="En savoir plus" width="150" />

                    <LargeSeparator text="Gallerie" />

                    <Gallerie photos={this.state.speciePhotos} />

                    <LargeSeparator text="Nos animaux" />

                    <AnimalListRound animalsOfThisSpecie={this.state.specieAnimals} />

                    <LargeSeparator text="Actualité de l'enclos" />

                    <BlogPost width={this.state.width} />

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
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "90%",
        alignItems: "center",

    },
    SpecieGallery: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",

    },
    AnimalsList: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        alignItems: "center",
        marginHorizontal: 25
    },
    AnimalItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        alignItems: "center",

    },
});

export default SpecieScreen

