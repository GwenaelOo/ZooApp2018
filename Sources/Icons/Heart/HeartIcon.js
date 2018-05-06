import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

class HeartIcon extends React.Component {
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
                marginTop: 9
            }
        })

      return (
        <TouchableOpacity>
            <View style={styles.widget}>
                    <Image
                        source={require('../heart-1024-black.png')}
                        style={styles.icon}
                    />
            </View>
            </TouchableOpacity>
        );
    }
}


export default HeartIcon
