import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, WebView } from 'react-native';
import PlaceHolderHeader from '../../Components/PlaceHolderHeader/PlaceHolderHeader';
import NavBar from '../../Components/NavBar/NavBar';
import LargeSeparator from '../../Components/LargeSeparator/LargeSeparator';
import BasicButton from '../../Components/Button/BasicButton';
import SquareImg from '../../Components/Img/SquareImg/SquareImg';
import Title from '../../Components/Text/Title/Title';
import { colors } from '../../Theme/Theme';
import { config } from '../../Config/Config';
//import Iframe from 'react-iframe'
import * as firebase from 'firebase';

const rawData = require('../../Assets/data.json');
const localData = rawData[config.zooId]

class ScreenEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
           
        };
    }

    handler = dims => this.setState({
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    });

    componentWillMount() {
        Dimensions.addEventListener("change", this.handler);
    }

    componentWillUnmount() {
      // Important to stop updating state after unmount
      Dimensions.removeEventListener("change", this.handler);
    }

    


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <WebView 
                    source={{uri:"https://www.helloasso.com/associations/groupement-de-reflexion-et-d-action-pour-l-animal/collectes/faites-un-don-pour-le-graal/widget"}}
                    style={{width: this.state.width, height: this.state.height * 4}}
                   >     
                    </WebView>
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

