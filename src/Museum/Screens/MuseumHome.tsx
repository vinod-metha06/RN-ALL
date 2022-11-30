import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import React, {useReducer,useEffect} from 'react'
import { MuseumReducer,initailState } from '../receduer/MuseumReducers';
import { GetMuseumID } from '../receduer/service';


const MuseumHomeScreen = ({ navigation }) => {
  const[state,dispatch]=useReducer(MuseumReducer,initailState);
    useEffect(()=>{
        const getData=async()=>{
            var data =await GetMuseumID();
            console.log(data  +"Homelog")
            // const list=data.filter((i)=>{
            //     if()
            // })
            if(data!=="error"){
                dispatch({type:"FETCH",payload:data});
            }else{
            dispatch({type:"FETCH_ERROR"});
            }
        }
        getData();
    },[])


    if (!state?.loading) {
        console.log(state?.data.objectIDs.slice(0, 10) +"loading")
    }
    if (state?.loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>

        )
    }
    if (state?.error) {
        console.log(state.error)
    }
    const renderItem = ({ item }) => {
        console.log(item +"item")
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Info', { Items: item })}>
                <View style={{ borderWidth: 2, margin: 10, padding: 10, }} >
                    <Text>IDs: {item}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <Text style={{ fontSize: 20, padding: 10, }}>Museum Screen</Text>
            <View style={{ height: '90%', borderWidth: 2, margin: 10, flexDirection: 'column' }} >
                <FlatList
                    data={state?.data.objectIDs.slice(0,10)}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                {/* <TouchableOpacity>
                    <Text style={{ fontSize: 35 }}>{state.post.objectIDs.slice(0, 20)}</Text>
                </TouchableOpacity> */}
                {/* <Text>{state.post.metadata.title}</Text>
                <Text>{state.post.features[0].properties.mag}</Text> */}
            </View>
        </View>
    )


}

export default MuseumHomeScreen;