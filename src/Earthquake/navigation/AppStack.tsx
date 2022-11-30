import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import EarthQuakeDetails from '../screens/DetailsScreen';
import EarthQuakeHome from '../screens/EarthQuakeHome';


export const EarthQuakeAppStack=()=>{
    const Stack=createNativeStackNavigator();
return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={EarthQuakeHome}/>
            <Stack.Screen 
            name="Details" 
            component={EarthQuakeDetails}
            options={({ route }) => ({
                headerTitle: () => <Text style={{fontWeight:'700',fontSize:16}}>{route.params?.item.title}</Text>,
              })}
              />
        </Stack.Navigator>
    </NavigationContainer>
);
}