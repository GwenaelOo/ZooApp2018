import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, TouchableOpacity } from 'react-native';

class ModalScreen extends React.Component {

   

    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            photoURL : this.props.navigation.state.params.selectedPhotoURL
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
    
    render(){

        const { navigation } = this.props;
        const selectedPhotoURL = navigation.getParam('selectedPhotoURL');
        const test = navigation.getParam('test');
        console.log(test)

        console.log(selectedPhotoURL)

        return (
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.goBack()}>
                <Image
                    style={{ width: this.state.width, height: this.state.height}}
                    source={{ uri: selectedPhotoURL}}
                />
            </TouchableOpacity>
        );
    }
}


export default ModalScreen

