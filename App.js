import React from 'react';
import { StyleSheet,Text ,View, SafeAreaView,ScrollView,ActivityIndicator } from 'react-native';
import Header from './components/header/header'
import LiveUpdate from './components/liveUpdate/liveUpdate'
import Heading from './components/heading/heading'
import Table from './components/table/table'
import Live from './screens/live'
import Helpline from './screens/helpline'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios'


const Help = () =>{
  return(
    <View>
      <Text>Helpline</Text>
    </View>
  )
}

const Tabs = createBottomTabNavigator()
MyTabs = () => {
  return(
    <Tabs.Navigator 
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: '#a8a8a8',
    }}>

      <Tabs.Screen name="LIVE" component={Live} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-radio" color={color} size={size} />
        ),
      }}/>

      <Tabs.Screen name="Helpline" component={Helpline} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-call" ios="ios-call" md="md-call" color={color} size={size} />
        ),
      }}/>
     

    </Tabs.Navigator>
  )

}

export default class App extends React.Component {
  render(){
    return(
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
