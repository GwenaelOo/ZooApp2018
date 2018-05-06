import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
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
import GridView from 'react-native-super-grid';

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

        const items = [
            { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
            { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
            { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
            { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
            { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
            { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
            { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
            { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
            { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
            { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
        ];

        const item = [
            {
                specieName: 'girafe',
                specieProfilePicture: 'https://www.geo.fr/var/geo/storage/images/media/images/girafe/2410391-1-fre-FR/girafe.jpg',
            },
            {
                specieName: 'poney',
                specieProfilePicture: 'http://data.photos-animaux.com/photos/601/6010/600968.jpg',
                specieId: '1'
            },
            {
                specieName: 'zebre',
                specieProfilePicture: 'https://rivistanatura.com/wp-content/uploads/2015/01/zebra-770x470.jpg',
                specieId: '1'
            },
            {
                specieName: 'cachalot oh oh oh oh oh',
                specieProfilePicture: 'https://cdn.radiofrance.fr/s3/cruiser-production/2017/09/25a99227-8943-4e0b-8168-12f8edbad24d/640_gettyimages-622474436.jpg',
                specieId: '1'
            },
             ]


        return (
            <ScrollView>
                <View style={styles.container}>
                    <PlaceHolderHeader />
                    <NavBar text={'PAGE DES' + ' ' + this.state.animalSpecieName.toUpperCase()} />
                    <View style={styles.SpecieIntro}>
                        <Image
                            style={{ width: this.state.width, height: (this.state.height / 2.5) }}
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Face_of_a_red_panda_%28Ailurus_fulgens%29_-_20080702.jpg' }}
                        />
                    </View>
                    <View style={styles.SpecieIntro}>
                            <GridView
                                itemDimension={150}
                                items={item}
                                style={styles.gridView}
                                renderItem={item => (
                                    <TouchableOpacity>
                                        <View style={[styles.itemContainer]}>
                                        <View style={{ borderWidth: 0}}>
                                            <Image
                                                style={{ width: 150, height: 130, display: "flex", alignItems: "center" }}
                                                source={{ uri: item.specieProfilePicture}}
                                            />
                                        </View>
                                        <View style={{display: "flex", justifyContent: "center" }}>
                                            <LightTitle text={item.specieName.toUpperCase()} size="tiny"/>
                                        </View>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
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
        alignItems: 'center',
    },
    SpecieIntro: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    gridView: {
        paddingTop: 25,
        flex: 1,
        backgroundColor: colors.BACKGROUND_COLOR,
        
      },
      itemContainer: {
        justifyContent: 'flex-end',
        padding: 10,
        height: 160,
      },
      itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
      },
      itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
      },
});

export default SpecieScreen

