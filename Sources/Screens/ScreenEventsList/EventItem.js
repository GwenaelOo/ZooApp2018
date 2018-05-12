import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
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

import { withNavigation } from 'react-navigation';


class EventItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('ScreenAnimal', {
                    itemId: this.props.animal.animalId,
                })
            }}>
            <View style={styles.eventItem}>
                <View style={styles.eventItemTitle}>
                    <Title text="Le falafel taquin" size="big" />
                    <LightTitle text="Restaurant" size="medium" />
                </View>
                <Image
                    style={{ width: this.state.width * 0.9, height: (this.state.height / 3), borderRadius: this.state.height / 30 }}
                    source={{ uri: 'http://www.delonghi.com/Global/recipes/multifry/195.jpg' }}
                />
            </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    eventItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20

    },
    eventItemTitle: {
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


export default withNavigation(EventItem);

