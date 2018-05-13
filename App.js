import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ZooApp from './Sources/ZooApp'

import ScreenAnimal from './Sources/Screens/ScreenAnimal/ScreenAnimal'
import ScreenSpeciesList from './Sources/Screens/ScreenSpeciesList/ScreenSpeciesList'
import ScreenList from './Sources/Screens/ScreenList/ScreenList'
import ScreenEvent from './Sources/Screens/ScreenEvent/ScreenEvent'
import ScreenAnimation from './Sources/Screens/ScreenAnimation/ScreenAnimation'
import ScreenService from './Sources/Screens/ScreenService/ScreenService'
import ScreenSpecie from './Sources/Screens/ScreenSpecie/ScreenSpecie'
import ModalScreen from './Sources/Screens/Modal/Modal';

import * as firebase from 'firebase';
import {config, firebaseConfig} from './Sources/Config/Config'

const localData = require('./Sources/Assets/data.json');


// FIREBASE STUFF

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

// FIREBASE STUFF 


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
  };
  constructor(props) {
    super(props);
    this.state = {
      speciesList: []
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>

        <Button
          title="Aller à la page espece"
          onPress={() => {
            this.props.navigation.navigate('ScreenSpeciesList', {
            });
          }}
        />
        <Button
          title="Aller à la page Liste animations"
          onPress={() => {
            this.props.navigation.navigate('ScreenList', {
              screenType: "animation"
            });
          }}
        />
        <Button
          title="Aller à la page Liste evenements"
          onPress={() => {
            this.props.navigation.navigate('ScreenList', {
              screenType: "event"
            });
          }}
        />

        <Button
          title="Aller à la page List services"
          onPress={() => {
            this.props.navigation.navigate('ScreenList', {         
                screenType: "service"
  
            });
          }}
        />
        <Button
          onPress={() => this.props.navigation.navigate('MyModal')}
          title="Info"
        />
      </View>
    );
  }
}

const Navigator = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  ScreenAnimal: {
    screen: ScreenAnimal
  },
  ScreenSpeciesList: {
    screen: ScreenSpeciesList
  },
  ScreenList: {
    screen: ScreenList
  },
  ScreenEvent: {
    screen: ScreenEvent
  },
  ScreenAnimation: {
    screen: ScreenAnimation
  },
  ScreenService: {
    screen: ScreenService
  },
  ScreenSpecie: {
    screen: ScreenSpecie
  },
},
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const ModalNavigator = StackNavigator({
  Main: {
    screen: Navigator,
  },
  MyModal: {
    screen: ModalScreen,
  },
},
  {
    mode: 'modal',
    headerMode: 'none',
  }
);


export default class App extends React.Component {
  render() {
    return <ModalNavigator />;
  }
}







