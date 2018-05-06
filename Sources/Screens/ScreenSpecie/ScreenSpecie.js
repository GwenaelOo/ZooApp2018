import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import PlaceHolderHeader from '../../Components/PlaceHolderHeader/PlaceHolderHeader';
import NavBar from '../../Components/NavBar/NavBar';
import LargeSeparator from '../../Components/LargeSeparator/LargeSeparator';
import BasicButton from '../../Components/Button/BasicButton';
import SquareImg from '../../Components/Img/SquareImg/SquareImg';
import BigThumbnail from '../../Components/Img/Thumbnail/BigThumbnail';
import MiniThumbnail from '../../Components/Img/Thumbnail/MiniThumbnail';
import Title from '../../Components/Text/Title/Title';
import LightTitle from '../../Components/Text/LightTitle/LightTitle';
import WidgetSocial from '../../Widget/WidgetSocial';
import { colors } from '../../Theme/Theme';
import HeartIcon from '../../Icons/Heart/HeartIcon';
import { TextTool } from '../../Theme/style';
import BlogPost from '../../Components/BlogPost/BlogPost';
import Gallerie from '../../Components/Img/Gallerie/Gallerie';

const data = require('../../Assets/data.json');

class SpecieScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            SpecieId: '',
            SpecieName: '',
            SpecieLatinName: '',
            SpecieEnglishName: '',
            SpecieClass: '',
            SpecieOrder: '',
            SpecieFamilly: '',
            SpecieIUCNClassification: '',
            SpecieDescription: '',
            SpecieGestation: '',
            SpecieWeight: '',
            SpecieLifeExpectancy: '',
            SpecieFood: [],
            SpecieProfilePicture: '',
            SpeciePhoto1: 'https://www.thoiry.net/sites/thoiry.net/files/2018-02/grand%20sourir%20panda.jpg',
            SpeciePhoto2: 'https://s3.eu-central-1.amazonaws.com/zooparc/assets/stars/panda_roux_1504.jpg',
            SpeciePhoto3: 'https://img3.telestar.fr/var/telestar/storage/images/3/0/7/8/3078326/le-panda-roux-espece-danger-dans-doumentaire-petit-panda-himalaya-sur-chaine-arte_width1024.jpg',
            SpeciePhoto4: 'https://www.thoiry.net/sites/thoiry.net/files/2018-02/panda%20roux%202.jpg',
            SpeciePhotos: {}
        };
    }

    fetchSpecieData(specieId){

        console.log(specieId)

        let specieData = data.speciesData.find(item => item.SpecieId === specieId)

        console.log(specieData)

        this.setState({
            SpecieId: specieData.SpecieId,
            SpecieName: specieData.SpecieName,
            SpecieLatinName: specieData.SpecieLatinName,
            SpecieEnglishName: specieData.SpecieEnglishName,
            SpecieClass: specieData.SpecieClass,
            SpecieOrder: specieData.SpecieOrder,
            SpecieFamilly: specieData.SpecieFamilly,
            SpecieIUCNClassification: specieData.SpecieIUCNClassification,
            SpecieDescription: specieData.SpecieDescription,
            SpecieGestation: specieData.SpecieGestation,
            SpecieWeight: specieData.SpecieWeight,
            SpecieLifeExpectancy: specieData.SpecieLifeExpectancy,
            SpecieFood: specieData.SpecieFood,
            SpecieProfilePicture: specieData.SpecieProfilePicture,
            SpeciePhotos: specieData.SpeciePhotos,

        })   
    }
    componentDidMount() {
        this.fetchSpecieData(this.props.navigation.state.params.itemId)
      }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.SpecieIntro}>
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 50, marginTop: 15, marginLeft: 35 }}
                            source={{ uri: this.state.SpecieProfilePicture }}
                        />
                        <View style={{ marginLeft: 24 }}>
                            <Title text={this.state.SpecieName} />
                            <LightTitle text={this.state.SpecieLatinName} />
                        </View>

                    </View>

                    <LargeSeparator text="A propos" />
                    
                    <Text style={[TextTool.PARAGRAPH, { marginHorizontal: 20 }]}>
                        {this.state.SpecieDescription} 
                        {this.state.SpecieId} 
                    </Text>

                    <BasicButton text="En savoir plus" width="150" />

                    <LargeSeparator text="Gallerie" />
                    <Gallerie photos={this.state.SpeciePhotos} />
                
                    <LargeSeparator text="Nos animaux" />

                    <View style={styles.AnimalsList}>
                        <View style={styles.AnimalItem}>
                            <BigThumbnail uri="https://s3.eu-central-1.amazonaws.com/zooparc/assets/stars/panda_roux_1_600.jpg" />
                            <View style={{ marginLeft: 24 }}>
                                <Title text="Kendo" size="big" />
                                <LightTitle text="Mâle 3 ans" size="big" />
                            </View>
                        </View>

                        <View style={styles.AnimalItem}>
                            <BigThumbnail uri="https://s3.eu-central-1.amazonaws.com/zooparc/assets/stars/panda_roux_1_600.jpg" />
                            <View style={{ marginLeft: 24 }}>
                                <Title text="Barbie" size="big" />
                                <LightTitle text="Femelle 4 ans" size="big" />
                            </View>
                        </View>
                        <View style={styles.AnimalItem}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('ScreenAnimal', {
                                    itemId: 86,
                                })
                            }}>
                                <BigThumbnail uri="http://www.msnbc.com/sites/msnbc/files/styles/ratio--3-2--1_5x-1245x830/public/article-teasers/rtr28tfi_copy.jpg?itok=92rvnUkk" />
                            </TouchableOpacity>
                            <View style={{ marginLeft: 24 }}>
                                <Title text="Junior" size="big" />
                                <LightTitle text="Mâle 6 mois" size="big" />
                            </View>

                        </View>
                    </View>

                    <LargeSeparator text="Actualité de l'enclos" />
                    <BlogPost width={this.state.width} />

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
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "90%",
        alignItems: "center",

    },
    SpecieGallery: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",

    },
    AnimalsList: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        alignItems: "center",
        marginHorizontal: 25
    },
    AnimalItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        alignItems: "center",

    },
});

export default SpecieScreen

