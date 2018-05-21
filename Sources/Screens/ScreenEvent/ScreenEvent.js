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
import Gallerie from '../../Components/Img/Gallerie/Gallerie';

const rawData = require('../../Assets/data.json');
const localData = rawData[config.zooId]

class ScreenEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            eventId: 0,
            eventName: ''
        };
    }

    fetchEventLocalData(EventId) {

        let eventData = localData.eventsData.find(item => item.eventId === EventId)

        this.setState({
            eventId: eventData.eventId,
            eventName: eventData.eventName,
            eventDescription: eventData.eventDescription,
            eventProfilePicture: eventData.eventProfilePicture,
        })
        if (eventData.eventPhotos.length > 0)  {
            this.setState({
                eventPhotos: eventData.eventPhotos,
                galleryDisplay: true
            })
        }
    }

    fetchEventRemoteData(eventId) {

        var ref = firebase.database().ref(config.zooId + '/eventsData/' + eventId);
        ref.once('value')

            .then(result => {
                let eventRemoteData = result.val()

                this.setState({
                    eventId: eventRemoteData.eventId,
                    eventName: eventRemoteData.eventName,
                    eventDescription: eventRemoteData.eventDescription,
                    eventProfilePicture: eventRemoteData.eventProfilePicture,
                })
                if (eventRemoteData.eventPhotos.length > 0)  {
                    this.setState({
                        eventPhotos: eventRemoteData.eventPhotos,
                        galleryDisplay: true
                    })
                }
            })
    }

    getOnlineDataVersion(itemId) {

        let refId = itemId - 1

        var ref = firebase.database().ref(config.zooId + '/eventsData/' + refId);
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
            this.fetchEventRemoteData(itemId)
        }

    }

    checkDataVersion(EventId) {

        console.log('check data version for the eventId', EventId)
        // Recuperation de la dataversion local
        let eventData = localData.eventsData.find(item => item.eventId === EventId)

        this.setState({
            localDataVersion: eventData.dataVersion
        })
        this.getOnlineDataVersion(EventId)
    }

    checkItemLocation(EventId) {
        let eventData = localData.eventsData.find(item => item.eventId === EventId)
        if (eventData == null) {
            console.log('data online')
            this.fetchEventRemoteData(EventId)
        } else {
            console.log('data local')
            this.fetchEventLocalData(EventId)
            this.checkDataVersion(EventId)
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
                            source={{ uri: this.state.eventProfilePicture }}
                        />
                        <View style={[TextTool.PARAGRAPH_CONTAINER, { width: this.state.width }]}>
                            <Text style={[TextTool.PARAGRAPH_LIGHTTITLE, { marginHorizontal: 20, marginTop: 10 }]}>
                                Evenement
                             </Text>
                            <Text style={[TextTool.PARAGRAPH_TITLE, { marginHorizontal: 20, marginTop: 10 }]}>
                                {this.state.eventName}
                            </Text>
                            <Text style={[TextTool.PARAGRAPH, { marginHorizontal: 20, marginTop: 10 }]}>
                                {this.state.eventDescription}
                            </Text>

                            {this.state.galleryDisplay ? <LargeSeparator text="Gallerie" /> : null}
                            {this.state.galleryDisplay ? <Gallerie photos={this.state.eventPhotos} /> : null}

                        </View>
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

export default ScreenEvent

