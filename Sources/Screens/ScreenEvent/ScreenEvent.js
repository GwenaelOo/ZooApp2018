import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions} from 'react-native';
import PlaceHolderHeader from '../../Components/PlaceHolderHeader/PlaceHolderHeader';
import NavBar from '../../Components/NavBar/NavBar';
import LargeSeparator from '../../Components/LargeSeparator/LargeSeparator';
import BasicButton from '../../Components/Button/BasicButton';
import SquareImg from '../../Components/Img/SquareImg/SquareImg';
import Title from '../../Components/Text/Title/Title';
import LightTitle from '../../Components/Text/LightTitle/LightTitle';
import Post from '../../Components/Img/Post/Post';
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
                    <NavBar text='Liste des espèces' />
                    <View style={styles.SpecieIntro}>
                        <Image
                            style={{ width: this.state.width, height: (this.state.height/2.5)}}
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Face_of_a_red_panda_%28Ailurus_fulgens%29_-_20080702.jpg' }}
                        />
        
                        <View style={{marginTop: 10 }}>
                            <Title text="Ken le survivant" size="big" style={{ marginLeft: 0, marginTop: 10 }}/>
                        </View>



                        <View style={{ display: "flex", width: this.state.width}}>
                        <View style={{ display: "flex", width: "95%", flexDirection: "row", justifyContent: "space-between", marginTop: 25, paddingHorizontal: 25}}>
                        
                        <View style={{justifyContent:"center", alignItems:"center"}}>
                          <Title text="5" size="medium-noMargin"/>
                          <LightTitle text="ans"/>
                        </View>

                        <View style={{justifyContent:"center", alignItems:"center"}}>
                            <Title text="1439"size="medium-noMargin"/>
                            <LightTitle text="amis"/>
                        </View>

                
                        <View style={{justifyContent:"center", alignItems:"center"}}>
                            <Title text="218" size="medium-noMargin"/>
                            <LightTitle text="trucs"/>
                        </View>
                        </View>
                     </View>

                    </View>

                    <LargeSeparator text="Biographie" />
                
                    <Text style={[TextTool.PARAGRAPH, { marginHorizontal: 20 }]}>
                        Le Petit panda, Panda roux ou Panda éclatant (Ailurus fulgens) est un mammifère de la famille des Ailuridae. Il a un régime alimentaire omnivore, essentiellement végétarien, bien qu'appartenant à l'ordre des Carnivores comme les ratons laveurs ou les ours avec lesquels on l'a parfois classé avec le Panda géant.
                    </Text>

                    <BasicButton text="En savoir plus" width="150" />

                    <LargeSeparator text="Gallerie" />
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.SpecieGallery}>

                            <SquareImg uri="https://s3.eu-central-1.amazonaws.com/zooparc/assets/stars/panda_roux_1_600.jpg" />
                            <SquareImg uri="https://t1.ea.ltmcdn.com/fr/images/5/9/9/img_ce_qu_il_faut_savoir_sur_le_panda_roux_995_600.jpg" />
                            <SquareImg uri="https://www.minutenews.fr/wp-content/uploads/2018/02/minutenews.fr-les-pandas-roux-nouvelles-cibles-des-braconniers-en-asie-2018-02-08_16-41-57_136113.jpg" />

                        </View>
                    </ScrollView>
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

export default SpecieScreen

