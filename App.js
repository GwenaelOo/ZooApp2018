import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ZooApp from './Sources/ZooApp'

import ScreenAnimal from './Sources/Screens/ScreenAnimal/ScreenAnimal'
import ScreenSpeciesList from './Sources/Screens/ScreenSpeciesList/ScreenSpeciesList'
import ScreenEventsList from './Sources/Screens/ScreenEventsList/ScreenEventsList'
import ScreenServicesList from './Sources/Screens/ScreenServicesList/ScreenServicesList'
import ScreenAnimationsList from './Sources/Screens/ScreenAnimationsList/ScreenAnimationsList'
import ScreenSpecie from './Sources/Screens/ScreenSpecie/ScreenSpecie'
import ModalScreen from './Sources/Screens/Modal/Modal';



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
    console.log(this.state.speciesList)
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
            this.props.navigation.navigate('ScreenAnimationsList', {
            });
          }}
        />
        <Button
          title="Aller à la page Liste evenements"
          onPress={() => {
            this.props.navigation.navigate('ScreenEventsList', {
            });
          }}
        />
        <Button
          title="Aller à la page List services"
          onPress={() => {
            this.props.navigation.navigate('ScreenServicesList', {
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
  ScreenAnimationsList: {
    screen: ScreenAnimationsList
  },
  ScreenEventsList: {
    screen: ScreenEventsList
  },
  ScreenServicesList: {
    screen: ScreenServicesList
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







