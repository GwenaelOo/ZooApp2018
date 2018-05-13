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

    fetchEventsRemoteData() {
        var ref = firebase.database().ref('speciesData/');
        ref.once('value')

            .then(result => this.setState({
                remoteData: result.val()
            }))
            .then(result => this.mergeRemoteAndLocalData(this.state.remoteData));
    }

    mergeRemoteAndLocalData = (remoteData) => {
        this.setState({
            speciesList: remoteData
        })
    }

    defineScreenType = (screenType) => {

        switch (screenType) {
            case "event":
                this.setState({
                    dataList: localData.eventsData,
                })
                break;

            case "animation":

                this.setState({
                    dataList: localData.animationsData,
                })
                break;

            case "service":

                this.setState({
                    dataList: localData.servicesData,
                })
                break;
            default:
                console.log('je suis dans defaults')

                break;
        }
    }

    componentWillMount() {
        this.defineScreenType(this.state.screenType)
        //this.fetchEventsRemoteData()
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                </View>
                <View style={styles.container}>
                    <List itemsList={this.state.dataList} screenType={this.state.screenType} />
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

