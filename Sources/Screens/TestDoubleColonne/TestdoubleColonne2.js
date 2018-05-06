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


class SpecieScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <PlaceHolderHeader />
                </View>
                <View style={styles.container}>
                    <NavBar text='Liste des espèces' />
                    <View style={styles.restaurantList}>
                        <View style={styles.restaurantItem}>
                             <View style={styles.restaurantItemTitle}>
                            <Title text="Le falafel taquin" size="big"/>
                            <LightTitle text="Restaurant" size="medium"/>
                            </View>
                            <Image
                                style={{ width: this.state.width * 0.9, height: (this.state.height / 3), borderRadius: this.state.height / 30}}
                                source={{ uri: 'http://www.delonghi.com/Global/recipes/multifry/195.jpg' }}
                            />
                        </View>
                        <View style={styles.restaurantItem}>
                            <View style={styles.restaurantItemTitle}>
                            <Title text="La crêpe dorée" size="big"/>
                            <LightTitle text="Restaurant" size="medium"/>
                            </View>
                            <Image
                                style={{ width: this.state.width * 0.9, height: (this.state.height / 3), borderRadius: this.state.height / 30}}
                                source={{ uri: 'https://i.ytimg.com/vi/k4f5HKsmXR0/maxresdefault.jpg' }}
                            />
                        </View>
                    </View>
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
    restaurantItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20

    },
    restaurantItemTitle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10

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

export default SpecieScreen

