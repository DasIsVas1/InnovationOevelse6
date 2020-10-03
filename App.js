import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';
import CarList from './components/CarList';
import AddCar from './components/AddCar';
import CarDetails from './components/CarDetails';
import { AntDesign } from '@expo/vector-icons';
import EditCar from "./components/EditCar";


const StackNavigator = createStackNavigator(
    {
      CarList: { screen: CarList },
      CarDetails: { screen: CarDetails },
        EditCar: {screen: EditCar}
    },
    { initialRouteKey: 'CarList' }
);

const TabNavigator = createBottomTabNavigator({
      CarList: {
        screen:StackNavigator,
        navigationOptions: {
          tabBarLabel:"CarList",
          tabBarIcon: ({ tintColor }) => (
              <AntDesign name="car" size={24} color={tintColor} />
          )
        },
      },
      AddCar: {
        screen:AddCar,
        navigationOptions: {
          tabBarLabel:"AddCar",
          tabBarIcon: ({ tintColor }) => (
              <AntDesign name="pluscircleo" size={24} color={tintColor} />
          )
        },
      }
    },
    {
      tabBarOptions: {
        showIcon:true,
        labelStyle: {
          fontSize: 15,
        },
        activeTintColor: 'darkblue',
        inactiveTintColor: 'gray',
        size:40
      }
    });
const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  componentWillMount() {
    const firebaseConfig = {
        apiKey: "AIzaSyActR9cn8ltW02-y9xV2-10z8roFaOzbjY",
        authDomain: "innovationoevelse6wtestmode.firebaseapp.com",
        databaseURL: "https://innovationoevelse6wtestmode.firebaseio.com",
        projectId: "innovationoevelse6wtestmode",
        storageBucket: "innovationoevelse6wtestmode.appspot.com",
        messagingSenderId: "967783281579",
        appId: "1:967783281579:web:d3b22128f7cfb9f34598ee"

    };
    // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
    // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  render() {
    return <AppContainer />;
  }
}


/*
------------------------------- FIREBASE CONFIG -------------------------------
 */
/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.22.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyActR9cn8ltW02-y9xV2-10z8roFaOzbjY",
    authDomain: "innovationoevelse6wtestmode.firebaseapp.com",
    databaseURL: "https://innovationoevelse6wtestmode.firebaseio.com",
    projectId: "innovationoevelse6wtestmode",
    storageBucket: "innovationoevelse6wtestmode.appspot.com",
    messagingSenderId: "967783281579",
    appId: "1:967783281579:web:d3b22128f7cfb9f34598ee"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
 */