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

class ScreenAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            animationId: 0,
            animationName: ''
        };
    }

    
    fetchAnimationLocalData(AnimationId) {

        let animationData = localData.animationsData.find(item => item.animationId === AnimationId)
       
        this.setState({
            animationId: animationData.animationId,
            animationName: animationData.animationName,
    
        })
    }

    fetchAnimationRemoteData(animationId) {

        refId = animationId - 1

        var ref = firebase.database().ref(config.zooId + '/animationsData/' + refId);
        ref.once('value')

            .then(result => {
                let animationRemoteData = result.val()
               
                this.setState({
                    animationId: animationRemoteData.animationId,
                    animationName: animationRemoteData.animationName,
                })
            })
    }

    getOnlineDataVersion(itemId) {

        let refId = itemId - 1
        
        var ref = firebase.database().ref(config.zooId + '/animationsData/' + refId);
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
            this.fetchAnimationRemoteData(itemId)
        }

    }

    checkDataVersion(AnimationId) {

        console.log('check data version for the animationId', AnimationId)
        // Recuperation de la dataversion local
        let animationData = localData.animationsData.find(item => item.animationId === AnimationId)
        
        this.setState({
            localDataVersion: animationData.dataVersion
        })
        this.getOnlineDataVersion(AnimationId)
    }

    checkItemLocation(AnimationId) {
        let animationData = localData.animationsData.find(item => item.animationId === AnimationId)
        if (animationData == null) {
            console.log('data online')
            this.fetctAnimationRemoteData(AnimationId)
        } else {
            console.log('data local')
            this.fetchAnimationLocalData(AnimationId)
            this.checkDataVersion(AnimationId)
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
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Face_of_a_red_panda_%28Ailurus_fulgens%29_-_20080702.jpg' }}
                        />
                        <Text style={[TextTool.PARAGRAPH, { marginHorizontal: 20 }]}>
                      {this.state.animationName}
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

export default ScreenAnimation

