import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState, useReducer, useEffect} from 'react';
import { Text } from 'react-native';
import AirlineHomePage from './Airlines/screens/Home';
import CovidHomePage from './Covid/Screens/CovidHomePage';
import EarthQuakeDetails from './Earthquake/screens/DetailsScreen';
import EarthQuakeHome from './Earthquake/screens/EarthQuakeHome';
import Main from './main';
import { MesueumAppStack } from './Museum/Navigation/AppStack';
import InfoScreen from './Museum/Screens/DetailsScreen';
import MuseumHomeScreen from './Museum/Screens/MuseumHome';
import PageHomeScreen from './Pagination _photo/screens/PageHomeScreen';


const AppNavigator = () => {
const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='CovidApp' component={CovidHomePage} />
        <Stack.Screen name='AirlineApp' component={AirlineHomePage} />
        <Stack.Screen name="Home" component={EarthQuakeHome}/>
            <Stack.Screen 
            name="DetailsEath" 
            component={EarthQuakeDetails}
            options={({ route }) => ({
                headerTitle: () => <Text style={{fontWeight:'700',fontSize:16}}>{route.params?.item.title}</Text>,
              })}
              />
        <Stack.Screen name='Pagination' component={PageHomeScreen} />
        <Stack.Screen name="Mesueum" component={MuseumHomeScreen}/>
            <Stack.Screen 
            name="Details" 
            component={InfoScreen}
            options={({ route }) => ({
                headerTitle: () => <Text style={{fontWeight:'700',fontSize:16}}>{route.params?.item}</Text>,
              })}
              />
    </Stack.Navigator>
    </NavigationContainer>
  );
  }
export default AppNavigator;
