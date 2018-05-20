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
import { config } from '../../Config/Config'

import * as firebase from 'firebase';

let Placeholder = require('../../Assets/Common/Placeholder/Placeholder.png')

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
            specieProfilePicture: '../../Assets/Common/Placeholder/Placeholder.png',
            speciePhotos: {},
            specieAnimals: {},
            // Configuration de l'ecran
            galleryDisplay: true,
            animalsDisplay: false,
            updated: false
        };
    }

    fetchSpecieRemoteData(itemId) {

        var ref = firebase.database().ref(config.zooId + '/speciesData/' + itemId);
        ref.once('value')

            .then((snapshot) => {
                this.setState({
                    remoteData: snapshot.val()
                })

            })
            .then(() => this.mergeRemoteAndLocalData(this.state.remoteData));
    }

    mergeRemoteAndLocalData = (remoteData) => {
        let test = 
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
            updated: true
        })
        console.log('photos apres mise a jour')
        console.log(this.state.speciePhotos)
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
            updated: true
        })
    }

    getOnlineDataVersion(itemId) {

        console.log(itemId)

        var ref = firebase.database().ref(config.zooId + '/speciesData/' + itemId);
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
        console.log(specieId)
        console.log('check data version for the specieId', specieId)
        // Recuperation de la dataversion local
        let specieData = localData.speciesData.find(item => item.specieId === specieId)

        this.setState({
            localDataVersion: specieData.dataVersion
        })
        this.getOnlineDataVersion(specieId)
    }

    checkItemLocation(specieId) {
        console.log(specieId)
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

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.speciePhotos === nextState.speciePhotos) {
            this.screenSetup()
           
            return true
        }
        if (this.state.animalsPhotos === nextState.animalsPhotos) {
            this.screenSetup()
       
            return true
        }
    }

    screenSetup() {
        console.log('je suis dans screensetup')
        if (this.state.updated === true) {
            console.log('liste dans specie photo apres update')
            console.log(this.state.speciePhotos)

            if (typeof this.state.specieAnimals === 'object' && this.state.specieAnimals.length > 0) {
                console.log('affichage des animaux')
                this.setState({
                    animalsDisplay: true
                })
            }
           
            if (typeof this.state.speciePhotos === 'object' && this.state.speciePhotos.length > 0) {
                console.log('affichage de la gallery')
                this.setState({
                    galleryDisplay: true
                })
            }
            
            this.setState({
                updated: false
            })
        }
    }

    componentWillMount(){
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
                    </Text>

                    <BasicButton text="En savoir plus" width="150" />


                    {this.state.galleryDisplay ? <LargeSeparator text="Gallerie"/> : null}
                    {this.state.galleryDisplay ? <Gallerie photos={this.state.speciePhotos}/> : null}

                    {this.state.animalsDisplay ? <LargeSeparator text="Nos animaux"/> : null}
                    {this.state.animalsDisplay ? <AnimalListRound animalsOfThisSpecie={this.state.specieAnimals}/> : null}

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
    hidden: {
        display: "none"
    }
});

export default SpecieScreen

