import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { withMappedNavigationProps } from 'react-navigation-props-mapper'

import { config } from '../../Config/Config'
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
import Gallerie from '../../Components/Img/Gallerie/Gallerie';

const data = require('../../Assets/data.json');

class ScreenAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            animalId: '',
            animalName: 'hop',
            animalSpecieName: 'Panda Roux',
            animalDescription: "Le Petit panda, Panda roux ou Panda éclatant (Ailurus fulgens) est un mammifère de la famille des Ailuridae. Il a un régime alimentaire omnivore, essentiellement végétarien, bien qu'appartenant à l'ordre des Carnivores comme les ratons laveurs ou les ours avec lesquels on l'a parfois classé avec le Panda géant.",
            animalAge: '',
            animalWeight: '',
            animalFood: [],
            animalPhotoProfil: 'http://www.club-panda.fr/wp-content/uploads/2015/07/quizz-8.jpg',
            animalPhotos: {},
        };
    }


    fetchSpecieData(animalId) {

        let specieId = 1
        let specieData = data.speciesData.find(item => item.specieId === specieId)
        let animalData = specieData.specieAnimals.find(item => item.animalId === animalId)

        console.log(animalData.animalPhotos)

        this.setState({
            animalName: animalData.animalName,
            animalPhotoProfil: animalData.photoURL,
            animalPhotos: animalData.animalPhotos,

        })
    }
    componentDidMount() {
        this.fetchSpecieData(this.props.navigation.state.params.itemId)
    }


    render() {
        console.log(this.state.animalPhotos)
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.SpecieIntro}>
                        <Image
                            style={{ width: this.state.width, height: (this.state.height / 2.5) }}
                            source={{ uri: this.state.animalPhotoProfil }}
                        />

                        <View style={{ marginTop: 10 }}>
                            <Title text={this.state.animalName} size="big" style={{ marginLeft: 0, marginTop: 10 }} />
                        </View>
                        <View style={{ display: "flex", width: this.state.width }}>
                            <View style={{ display: "flex", width: "95%", flexDirection: "row", justifyContent: "space-between", marginTop: 25, paddingHorizontal: 25 }}>

                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Title text="5" size="medium-noMargin" />
                                    <LightTitle text="ans" />
                                </View>

                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Title text="82" size="medium-noMargin" />
                                    <LightTitle text="amis" />
                                </View>


                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Title text="4" size="medium-noMargin" />
                                    <LightTitle text="enfants" />
                                </View>
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Title text="Animal ID" size="medium-noMargin" />
                                    <LightTitle text={this.props.navigation.state.params.itemId} />
                                </View>
                            </View>
                        </View>

                    </View>

                    <LargeSeparator text="Biographie" />

                    <Text style={[TextTool.PARAGRAPH, { marginHorizontal: 20 }]}>
                        {this.state.animalDescription}
                    </Text>

                    <BasicButton text="En savoir plus" width="150" />

                    <LargeSeparator text="Gallerie" />

                    <Gallerie photos={this.state.animalPhotos} />

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

export default ScreenAnimal

