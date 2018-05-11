import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ZooApp from './Sources/ZooApp'

import ScreenAnimal from './Sources/Screens/ScreenAnimal/ScreenAnimal'
import ScreenSpeciesList from './Sources/Screens/ScreenSpeciesList/ScreenSpeciesList'
import ScreenList from './Sources/Screens/ScreenList/ScreenList'
import ScreenSpecie from './Sources/Screens/ScreenSpecie/ScreenSpecie'
import ModalScreen from './Sources/Screens/Modal/Modal';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>

        <Button
          title="Aller à la page espece"
          onPress={() => {
            this.props.navigation.navigate('ScreenSpeciesList', {
            });
          }}
        >

        </Button>
        <Button
          title="Aller à la page espece"
          onPress={() => {
            this.props.navigation.navigate('ScreenSpecie', {
            });
          }}
        />
        <Button
          title="Aller à la page animal"
          onPress={() => {
            this.props.navigation.navigate('ScreenAnimal', {
            });
          }}
        />
        <Button
          title="Aller à la page List"
          onPress={() => {
            this.props.navigation.navigate('ScreenList', {
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







