import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import BasicButton from '../Button/BasicButton';

class DonationButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            donationURL: ''
        };
    }
    getDonationURL(zooId) {

        var ref = firebase.database().ref(zooId + '/donationData/');
        ref.once('value')

            .then(result => {
                let remoteData = result.val()

                this.setState({
                    donationURL: remoteData.donationURL,
                })
            })
    }
    componentDidMount() {
        this.getDonationURL(this.props.navigation.state.params.zooId)

    }
    render() {
        return (
            <BasicButton text="Faire un don" width="150" onPress={() => {
                this.props.navigation.navigate('ScreenList', {
                    donationURL: this.state.donationURL
                });
            }} />
        );
    }
}


export default DonationButton

