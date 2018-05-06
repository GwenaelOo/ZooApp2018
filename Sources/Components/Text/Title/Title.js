import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textSize: 2
        }
    }
    componentWillMount() {
        switch (this.props.size) {
            case 'big':
                this.setState({
                    textSize: 28,
                })
                break;

            case 'medium':
                this.setState({
                    textSize: 24,
                })
                break;

            case 'medium-align-tiny':
                this.setState({
                    textSize: 24,
                })
                break;
            
            case 'medium-align-tiny':
                this.setState({
                    textSize: 24,
                })
                break;

            case 'tiny':
                this.setState({
                    textSize: 16,
                })
                break;
                

            default:
                this.setState({
                    textSize: 24,
                })
                break;
        }
    }
    render() {

        let styles = StyleSheet.create({
            text: {
                fontSize: this.state.textSize,
                marginLeft: this.state.marginLeft,
                fontWeight: "bold",
                color: "#5E7FB1",   
            },
        })

      return (
        <Text style={styles.text}>{this.props.text}</Text>
        );
    }
}


export default Title