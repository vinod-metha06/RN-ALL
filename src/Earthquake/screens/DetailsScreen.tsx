//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const EarthQuakeDetails = ({route}) => {
    const items=route.params.item;
    return (
        <View style={styles.container}>
            <View style={styles.card}>
            <Text style={styles.text}>Place: {items.title}</Text>
            <Text style={styles.text}>Magnitude: {items.title}</Text>
            <Text style={styles.text}>Latitude: {items.title}</Text>
            <Text style={styles.text}>Longitude: {items.title}</Text>
            <Text style={styles.text}>Number of Tsunami triggered: {items.title}</Text>
            </View>
            
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        
    },
    card: {
        marginTop: 18,
        backgroundColor: '#7ad128',
        borderRadius: 60,
        width: '90%',
        height:'50%',
        padding: 14,
        alignContent:'center',
        justifyContent:'space-evenly',
        elevation:6
      },
      text:{
        color:'#000',
        fontSize:18
      }
});

export default EarthQuakeDetails;
