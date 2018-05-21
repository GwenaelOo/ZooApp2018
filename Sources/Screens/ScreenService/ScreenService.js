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
import { config } from '../../Config/Config';
import * as firebase from 'firebase';

const rawData = require('../../Assets/data.json');
const localData = rawData[config.zooId]

class ScreenService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            serviceId: 0,
            serviceName: ''
        };
    }

    fetchServiceLocalData(ServiceId) {

        let serviceData = localData.servicesData.find(item => item.serviceId === ServiceId)
       
        this.setState({
            serviceId: serviceData.serviceId,
            serviceName: serviceData.serviceName,
            serviceProfilePicture: serviceData.serviceProfilePicture,
            servicePhotos: servicePhotos
    
        })
    }

    fetchServiceRemoteData(ServiceId) {

        refId = ServiceId - 1

        console.log(refId)

        var ref = firebase.database().ref(config.zooId + '/servicesData/' + refId);
        ref.once('value')

            .then(result => {
                let serviceRemoteData = result.val()
               
                this.setState({
                    serviceId: serviceRemoteData.serviceId,
                    serviceName: serviceRemoteData.serviceName,
                    serviceProfilePicture: serviceData.serviceProfilePicture,
                    servicePhotos: servicePhotos
                })
            })
    }

    getOnlineDataVersion(itemId) {

        let refId = itemId - 1

        var ref = firebase.database().ref(config.zooId + '/servicesData/' + refId);
        ref.once('value')

            .then(result => {
                let remoteData = result.val()
                this.setState({
                    remoteDataVersion: remoteData.dataVersion
                })
            })
            .then(result => {
                this.shouldUpdate(itemId)
            })
    }

    shouldUpdate(itemId) {

        console.log('Local data version ', this.state.localDataVersion)
        console.log('Remote data version ', this.state.remoteDataVersion)

        if (this.state.remoteDataVersion > this.state.localDataVersion) {
            console.log('Mise à jour des données')
            this.fetchServiceRemoteData(itemId)
        }

    }

    checkDataVersion(serviceId) {

        console.log('check data version for the serviceId', serviceId)
        // Recuperation de la dataversion local
        let serviceData = localData.servicesData.find(item => item.serviceId === serviceId)
        
        this.setState({
            localDataVersion: serviceData.dataVersion
        })
        this.getOnlineDataVersion(serviceId)
    }

    checkItemLocation(serviceId) {
        let serviceData = localData.servicesData.find(item => item.serviceId === serviceId)
        if (serviceData == null) {
            console.log('data online')
            this.fetchServiceRemoteData(serviceId)
        } else {
            console.log('data local')
            this.fetchServiceLocalData(serviceId)
            this.checkDataVersion(serviceId)
        }
    }
    
    componentDidMount() {
        this.checkItemLocation(this.props.navigation.state.params.itemId)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.SpecieIntro}>
                        <Image
                            style={{ width: this.state.width, height: (this.state.height / 2.5) }}
                            source={{ uri: this.state.serviceProfilePicture }}
                        />
                        <Text style={[TextTool.PARAGRAPH, { marginHorizontal: 20 }]}>
                      {this.state.serviceName}
                    </Text>
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

export default ScreenService

