import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import HomeScreen from './HomeScreen';
import SplitScreen from './SplitScreen';
import ProfileScreen from './ProfileScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from 'react-native';


const homeName = 'Home';
const splitName = 'Split';
const profileName = 'profile';

const Tab = createMaterialTopTabNavigator();

function Hero() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition='bottom'
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#6563FF',
          tabBarInactiveTintColor: 'gray',
          tabBarAndroidRipple: {borderless: true},
          tabBarStyle:{
            height:70,
            width: '100%',
            justifyContent:'center',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
          tabBarIndicatorStyle:{
            backgroundColor: '#6563FF',
          },
          tabBarItemStyle:{
            height: 30,
            marginBottom: 20,
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if(route.name === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            }else if(route.name === splitName){
              iconName = focused ? 'wallet' : 'wallet-outline';
            }else if(route.name === profileName) {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={25} color={color}/>
          },
        })}
      > 

      <Tab.Screen 
        name={homeName} 
        component={HomeScreen}/>
      <Tab.Screen 
        name={splitName} 
        component={SplitScreen}/>
      <Tab.Screen 
        name={profileName} 
        component={ProfileScreen}/>

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Hero