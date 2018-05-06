import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
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

class SpecieScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            SpecieId: '',
            SpecieName: 'Panda Roux',
            SpecieLatinName: 'Ailurus fulgens',
            SpecieEnglishName: '',
            SpecieClass: '',
            SpecieOrder: '',
            SpecieFamilly: '',
            SpecieIUCNClassification: '',
            SpecieDescription: "Le Petit panda, Panda roux ou Panda éclatant (Ailurus fulgens) est un mammifère de la famille des Ailuridae. Il a un régime alimentaire omnivore, essentiellement végétarien, bien qu'appartenant à l'ordre des Carnivores comme les ratons laveurs ou les ours avec lesquels on l'a parfois classé avec le Panda géant.",
            SpecieGestation: '',
            SpecieWeight: '',
            SpecieLifeExpectancy: '',
            SpecieFood: [],
            SpeciePhotoProfil: 'http://www.club-panda.fr/wp-content/uploads/2015/07/quizz-8.jpg',
            SpeciePhoto1: 'https://www.thoiry.net/sites/thoiry.net/files/2018-02/grand%20sourir%20panda.jpg',
            SpeciePhoto2: 'https://s3.eu-central-1.amazonaws.com/zooparc/assets/stars/panda_roux_1504.jpg',
            SpeciePhoto3: 'https://img3.telestar.fr/var/telestar/storage/images/3/0/7/8/3078326/le-panda-roux-espece-danger-dans-doumentaire-petit-panda-himalaya-sur-chaine-arte_width1024.jpg',
            SpeciePhoto4: 'https://www.thoiry.net/sites/thoiry.net/files/2018-02/panda%20roux%202.jpg',
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <PlaceHolderHeader />
                    <NavBar text='Liste des espèces' />
                    <View style={styles.SpecieIntro}>
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 50, marginTop: 15, marginLeft: 35 }}
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Face_of_a_red_panda_%28Ailurus_fulgens%29_-_20080702.jpg' }}
                        />
                        <View style={{ marginLeft: 24 }}>
                            <Title text={this.state.SpecieName} />
                            <LightTitle text={this.state.SpecieLatinName} />
                        </View>

                    </View>

                    <LargeSeparator text="A propos" />

                    <Text style={[TextTool.PARAGRAPH, { marginHorizontal: 20 }]}>
                        {this.state.SpecieDescription}
                    </Text>

                    <BasicButton text="En savoir plus" width="150" />

                    <LargeSeparator text="Gallerie" />
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.SpecieGallery}>
                            <View style={{ marginLeft: 5 }}>
                                <SquareImg uri={this.state.SpeciePhoto1} />
                            </View>
                            <View style={{ marginLeft: 5 }}>
                                <SquareImg uri={this.state.SpeciePhoto2} />
                            </View>
                            <View style={{ marginLeft: 5 }}>
                                <SquareImg uri={this.state.SpeciePhoto3} />
                            </View>
                            <View style={{ marginLeft: 5 }}>
                                <SquareImg uri={this.state.SpeciePhoto4} />
                            </View>

                        </View>
                    </ScrollView>
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
                            <BigThumbnail uri="http://www.msnbc.com/sites/msnbc/files/styles/ratio--3-2--1_5x-1245x830/public/article-teasers/rtr28tfi_copy.jpg?itok=92rvnUkk" />
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

