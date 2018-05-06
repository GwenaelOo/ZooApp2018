import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
} from 'react-native';

const remote = 'http://www.legorafi.fr/2017/06/02/un-adorable-panda-roux-en-a-assez-detre-aime-uniquement-pour-son-physique/';

export default class BackgroundImage extends Component {
  render() {
    const resizeMode = 'center';
    const text = 'I am some centered text';

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode,
            }}
            source={{ uri: remote }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
            }}
          >
            {text}
          </Text>
        </View>
      </View>
    );
  }
}
