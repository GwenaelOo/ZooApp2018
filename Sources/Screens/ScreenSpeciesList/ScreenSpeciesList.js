import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
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
            height: Dimensions.get('window').height,
            animalId: '',
            animalName: 'Ken le surivant',
            animalSpecieName: 'Panda Roux',
            animalDescription: "Le Petit panda, Panda roux ou Panda éclatant (Ailurus fulgens) est un mammifère de la famille des Ailuridae. Il a un régime alimentaire omnivore, essentiellement végétarien, bien qu'appartenant à l'ordre des Carnivores comme les ratons laveurs ou les ours avec lesquels on l'a parfois classé avec le Panda géant.",
            animalAge: '',
            animalWeight: '',
            animalFood: [],
            animalPhotoProfil: 'http://www.club-panda.fr/wp-content/uploads/2015/07/quizz-8.jpg',
            animalPhoto1: 'https://www.thoiry.net/sites/thoiry.net/files/2018-02/grand%20sourir%20panda.jpg',
            animalPhoto2: 'https://s3.eu-central-1.amazonaws.com/zooparc/assets/stars/panda_roux_1504.jpg',
            animalPhoto3: 'https://img3.telestar.fr/var/telestar/storage/images/3/0/7/8/3078326/le-panda-roux-espece-danger-dans-doumentaire-petit-panda-himalaya-sur-chaine-arte_width1024.jpg',
            animalPhoto4: 'https://www.thoiry.net/sites/thoiry.net/files/2018-02/panda%20roux%202.jpg',
         };
      }
            
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <PlaceHolderHeader />
                    <NavBar text={'PAGE DES' + ' ' + this.state.animalSpecieName.toUpperCase()} />
                    <View style={styles.SpecieIntro}>
                        <Image
                            style={{ width: this.state.width, height: (this.state.height/2.5)}}
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Face_of_a_red_panda_%28Ailurus_fulgens%29_-_20080702.jpg' }}
                        />                 
                     </View> 
                     <View style={styles.SpecieIntro}>
                        <View style={styles.SpeciesList}>
                            <View style={{ width: this.state.width / 2, height: this.state.width / 2,}}>
                                <TouchableOpacity activeOpacity={0.5} delayPressIn={20}>
                                    <Image
                                        style={{ width: 150, height: 150 }}
                                        source={{ uri: this.state.animalPhoto1 }}
                                    />
                                </TouchableOpacity>
                            </View>
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
    SpeciesList: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginVertical: 20,
    },
    SpeciesItem: {
        

    },
});

export default SpecieScreen

