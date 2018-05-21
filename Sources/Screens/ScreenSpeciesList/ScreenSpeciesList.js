import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
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
import GridView from 'react-native-super-grid';
import { config, firebaseConfig } from '../../Config/Config'


import * as firebase from 'firebase';

const rawData = require('../../Assets/data.json');
const localData = rawData[config.zooId]

var _ = require('lodash');

class SpecieScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            speciesList: localData.speciesData,
        };
    }

    static navigationOptions = {
        title: 'Liste des espèces',
    };

    fetchSpeciesRemoteData() {
        var ref = firebase.database().ref(config.zooId + '/speciesData/');
        ref.once('value')
            .then(result => this.setState({
                remoteData: result.val()
            })
            )
            .then(result => this.mergeRemoteAndLocalData(this.state.remoteData));
    }


    mergeRemoteAndLocalData = (remoteData) => {

        console.log(this.state.speciesList)

        for (let specie in remoteData) {

            if (_.has(this.state.speciesList, specie)) {
                let remoteDataVersion = remoteData[specie].dataVersion
                let localDataVersion = this.state.speciesList[specie].dataVersion

                console.log('remote data version de la specie' + remoteData[specie].specieName + ' ' + remoteDataVersion)
                console.log('local data version de la specie' + this.state.speciesList[specie].specieName + ' ' + localDataVersion)


                if (remoteDataVersion > localDataVersion) {
                    console.log('mise à jour')
                    this.addSpecieToList(specie, remoteData)
                }
            } else {
                this.addSpecieToList2(specie, remoteData)
            }
        }

    }
    addSpecieToList2(specie, remoteData) {

        let newList = _.concat(this.state.speciesList, remoteData[specie]);
        
        this.setState({
            speciesList: newList
        })

        console.log

    }

    addSpecieToList(specie, remoteData) {
        let newList = this.state.speciesList

        newList[specie].specieId = [remoteData[specie].specieId].toString()
        newList[specie].specieName = [remoteData[specie].specieName].toString()
        newList[specie].specieLatinName = [remoteData[specie].specieLatinName].toString()
        newList[specie].specieEnglishName = [remoteData[specie].specieEnglishName].toString()
        newList[specie].specieClass = [remoteData[specie].specieClass].toString()
        newList[specie].specieOrder = [remoteData[specie].specieOrder].toString()
        newList[specie].specieFamilly = [remoteData[specie].specieFamilly].toString()
        newList[specie].specieIUCNClassification = [remoteData[specie].specieIUCNClassification].toString()
        newList[specie].specieDescription = [remoteData[specie].specieDescription].toString()
        newList[specie].specieGestation = [remoteData[specie].specieGestation].toString()
        newList[specie].specieWeight = [remoteData[specie].specieWeight].toString()
        newList[specie].specieLifeExpectancy = [remoteData[specie].specieLifeExpectancy].toString()
        newList[specie].specieFood = [remoteData[specie].specieFood].toString()
        newList[specie].specieProfilePicture = [remoteData[specie].specieProfilePicture].toString()
        newList[specie].speciePhotos = [remoteData[specie].speciePhotos]
        newList[specie].specieAnimals = [remoteData[specie].specieAnimals]

        this.setState({
            speciesList: newList
        })
    }

    componentWillMount() {
        this.fetchSpeciesRemoteData()
    }

    render() {
        let item = this.state.speciesList

        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.SpecieIntro}>
                        <Image
                            style={{ width: this.state.width, height: (this.state.height / 2.5) }}
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Face_of_a_red_panda_%28Ailurus_fulgens%29_-_20080702.jpg' }}
                        />
                    </View>
                    <View style={styles.SpecieIntro}>
                        <GridView
                            itemDimension={150}
                            items={item}
                            style={styles.gridView}
                            renderItem={item => (
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('ScreenSpecie', {
                                        itemId: item.specieId,
                                    })
                                }}>
                                    <View style={[styles.itemContainer]}>
                                        <View style={{ borderWidth: 0 }}>
                                            <Image
                                                style={{ width: 150, height: 130, display: "flex", alignItems: "center" }}
                                                source={{ uri: item.specieProfilePicture }}
                                            />
                                        </View>
                                        <View style={{ display: "flex", justifyContent: "center" }}>
                                            <LightTitle text={item.specieName.toUpperCase()} size="tiny" />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
    },
    SpecieIntro: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    gridView: {
        paddingTop: 25,
        flex: 1,
        backgroundColor: colors.BACKGROUND_COLOR,

    },
    itemContainer: {
        justifyContent: 'flex-end',
        padding: 10,
        height: 160,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});

export default SpecieScreen

