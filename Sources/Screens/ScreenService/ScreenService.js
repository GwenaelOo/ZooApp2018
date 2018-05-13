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

const data = require('../../Assets/data.json');

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

    fetchServiceData(ServiceId) {

        let serviceData = data.servicesData.find(item => item.serviceId === ServiceId)
       
        this.setState({
            serviceId: serviceData.serviceId,
            serviceName: serviceData.serviceName,
    
        })
    }
    componentDidMount() {
        this.fetchServiceData(this.props.navigation.state.params.itemId)
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

