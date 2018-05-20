import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
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
import List from './List';
import { config } from '../../Config/Config'

import * as firebase from 'firebase';

const rawData = require('../../Assets/data.json');
const localData = rawData[config.zooId]

class ScreenList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            screenType: this.props.navigation.state.params.screenType,
        };
    }

    defineDataType(dataListName) {
        console.log('je suis dans define')
        switch (dataListName) {
            case 'animationsData':
                return ('animation')
                break;
            case 'eventsData':
                return ('event')
                break;
            case 'servicesData':
                return ('service')
                break;
            default:
                break;
        }
    }


    mergeRemoteAndLocalData = (remoteData, dataListName) => {

        let itemType = this.defineDataType(dataListName)

        for (let item in remoteData) {

            let objectItemType = {
                remote: 'remoteData[item]' + '.' + itemType + 'Name',
                local: 'this.state.localDataList[item]' + '.' + itemType + 'Name',
                itemId: itemType + 'Id',
            }

            let remoteDataVersion = remoteData[item].dataVersion
            let localDataVersion = this.state.localDataList[item].dataVersion

            console.log('remote data version de ' + eval(objectItemType.remote) + ' ' + remoteDataVersion)
            console.log('local data version de ' + eval(objectItemType.local) + ' ' + localDataVersion)

            if (remoteDataVersion > localDataVersion) {
                console.log('mise à jour')

                let newList = this.state.localDataList

                switch (itemType) {
                    case 'animation':
                        newList[item].animationId = [remoteData[item].animationId].toString()
                        newList[item].animationName = [remoteData[item].animationName].toString()
                        newList[item].animationPhotoProfil = [remoteData[item].animationPhotoProfil].toString()

                        break;
                    case 'event':

                        newList[item].eventId = [remoteData[item].eventId].toString()
                        newList[item].eventName = [remoteData[item].eventName].toString()
                        newList[item].eventPhotoProfil = [remoteData[item].eventPhotoProfil].toString()

                        break;
                    case 'service':

                        newList[item].serviceId = [remoteData[item].serviceId].toString()
                        newList[item].serviceName = [remoteData[item].serviceName].toString()
                        newList[item].servicePhotoProfil = [remoteData[item].servicePhotoProfil].toString()

                        break;
                    default:
                        break;
                }

                this.setState({
                    localDataList: newList
                })
                console.log('verification photoprofil')
                console.log(localDataList[item].servicePhotoProfil)
            }
        }
    }

    defineScreenType = (screenType) => {
        switch (screenType) {
            case "event":
                this.setState({
                    localDataList: localData.eventsData,
                })
                this.fetchRemoteData('eventsData')
                break;

            case "animation":

                this.setState({
                    localDataList: localData.animationsData,
                })
                this.fetchRemoteData('animationsData')
                break;

            case "service":

                this.setState({
                    localDataList: localData.servicesData,
                })
                this.fetchRemoteData('servicesData')
                break;
            default:
                break;
        }
    }

    fetchRemoteData(dataListName) {

        var ref = firebase.database().ref(config.zooId + '/' + dataListName + '/');
        ref.once('value')
            .then(result => this.setState({
                remoteData: result.val()
            })
            )
            .then(result => this.mergeRemoteAndLocalData(this.state.remoteData, dataListName));
    }

    componentWillMount() {
        this.defineScreenType(this.state.screenType)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                </View>
                <View style={styles.container}>
                    <List itemsList={this.state.localDataList} screenType={this.state.screenType} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: colors.BACKGROUND_COLOR,
        alignItems: "center",
        justifyContent: "center"

    },
    restaurantList: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        width: "100%"
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

export default ScreenList

