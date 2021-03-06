import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';




class WidgetSocial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconSize: 24
        }
    }
    
    componentWillMount() {
        switch (this.props.size) {
            case 'big':
                this.setState({
                    iconSize: 96
                })
                break;

            case 'medium':
                this.setState({
                    iconSize: 36
                })
                break;

            case 'tiny':
                this.setState({
                    iconSize: 24
                })
                break;

            default:
                this.setState({
                    iconSize: 24
                })
                break;
        }
    }
    render() {


        let styles = StyleSheet.create({
            icon: {
                width: this.state.iconSize,
                height: this.state.iconSize,
            },
            widget: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 9
            }
        })

      return (
        <TouchableOpacity>
            <View style={styles.widget}>
                    <Image
                        source={require('../Icons/facebook-1024-black.png')}
                        style={styles.icon}
                    />
                    <Image
                        source={require('../Icons/instagram-1024-black.png')}
                        style={[styles.icon, {marginLeft: 5}]}
                    />
                    <Image
                        source={require('../Icons/twitter-1024-black.png')}
                        style={[styles.icon, {marginLeft: 10}]}
                    />
            </View>
            </TouchableOpacity>
        );
    }
}


export default WidgetSocial
