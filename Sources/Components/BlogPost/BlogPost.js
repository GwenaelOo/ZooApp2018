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

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            postImageURL: "https://www.tourte.org/wp-content/uploads/2011/03/panda-roux-neige.jpg",
            postDate: "3 fevrier 2018",
            postAuthor:"Natalie",
            postAuthorJob:"Vétérinaire",
            postAuthorProfilePict: "https://pbs.twimg.com/profile_images/378800000328173778/ba6e071b478e9db5cfd020ae07d082a6_400x400.jpeg",
            postContent: "Le Petit panda, Panda roux ou Panda éclatant (Ailurus fulgens) est un mammifère de la famille des Ailuridae. Il a un régime alimentaire omnivore, essentiellement végétarien, bien qu'appartenant à l'ordre des Carnivores comme les ratons laveurs ou les ours avec lesquels on l'a parfois classé avec le Panda géant."
         };
      }
            
    render() {
        return (
            <View style={styles.BlogPostContainer}>
                    <View style={styles.BlogPost}>

                    <Image
                    style={{ width: this.props.width, height: 200, marginBottom: 15}}
                    source={{ uri: this.state.postImageURL }}
                    />
                        <View style={{ display: "flex", width: "90%", flexDirection: "row" }}>
                            <View style={{ flex: 0.5, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                                <MiniThumbnail
                                    uri={this.state.postAuthorProfilePict} />
                                <View style={{marginLeft: 12 }}>
                                    <Title text={this.state.postAuthor} size="medium-align-tiny" />
                                    <LightTitle text={this.state.postAuthorJob} size="tiny" />
                                </View>
                            </View>
                            <View style={{ flex: 0.5, flexDirection: "row", justifyContent: "flex-end" }}>
                                <LightTitle text={this.state.postDate} />
                            </View>
                        </View>
                        <View style={styles.BlogPostContent}>
                            <Text style={TextTool.PARAGRAPH}>
                                {this.state.postContent}
                           </Text>
                        </View>
                    </View>


                    <View style={{ display: "flex", width: "90%", flexDirection: "row", marginBottom: 12}}>
                        <View style={{ flex: 0.5, flexDirection: "row", justifyContent: "flex-start" }}>
                            <WidgetSocial size="medium" />
                        </View>

                        <View style={{ flex: 0.5, flexDirection: "row", justifyContent: "flex-end" }}>
                            <HeartIcon size="medium" />
                        </View>
                    </View>
                </View>       
        );
    }
}

const styles = StyleSheet.create({
    BlogPostContainer: {
        display: "flex",
        width: "90%",
        alignItems: "center",
    },
    BlogPost: {
        display: "flex",
        width: "100%",
        alignItems: "center",
    },
    BlogPostInfo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "90%",
        alignItems: "center",
    },
    BlogPostDate: {

        alignItems: "flex-end",
        width: "55%"
    },
    BlogPostContent: {
        display: "flex",
        width: "90%",
        alignItems: "center",
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,


    },
});

export default BlogPost

