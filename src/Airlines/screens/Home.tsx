import {useReducer,useState,useEffect} from "react"; 
import { Button, FlatList, Image, Text, StyleSheet, TextInput, View, ActivityIndicator, Alert } from "react-native";
import { getAirlines } from "../reducers/service";
import { AirReducer,initailState } from "../reducers/reducers";



const AirlineHomePage=()=>{
    const[text,setText]=useState('');
    const [state,dispatch]=useReducer(AirReducer,initailState);

    useEffect(()=>{
        async function getData() {
            const data = await getAirlines();
            if (data !== 'error') {
              dispatch({type: 'FETCH', payload: data});
            } else {
                dispatch({type:"FETCH_ERROR",payload:'error'})
            }
          }
          getData();

    },[])

    const Search= async()=>{
        const list=state?.data.filter(item=>{
            if(item.name.toLowerCase().includes(text.toLowerCase())){
                return item;
            }
        });
        dispatch({type:"SEARCH",payload:list})
            
    }

    const renderItem=({item})=>{
        if(item.id!==undefined){
            return(
                <View style={styles.card}>
                    <Image
                    source={{uri:item.logo}}
                    style={{
                        resizeMode:'contain',
                        width:98,
                        height:100,
                        borderRadius:40
                    }}
                    />
                    <View style={{flexDirection:'column',marginLeft:10}}>
                        <Text>{item.name}</Text>
                        <Text>{item.country}</Text>
                    </View>
                    
                </View>
            );
         } 
        
    }

const Loading=()=>{
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator
                size={60}
                color='black'
                />
            </View>
        );
    }
    // if(state?.error=='error'){
    //     return(
    //         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //           <Text>Error</Text>
    //         </View>
    //     );
    // }
  
    return(
        
        <View style={styles.container}>
            <TextInput
            placeholder="Serach here.."
            onChangeText={t=>setText(t)}
            style={styles.input}
            />
            <Button
            title="Search"
            onPress={Search}
            />
            {state?.loading? (
        <Loading />
      ) : (
            <FlatList
            data={text===""?state?.data.slice(0,10):state?.search}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            
            />
      )}
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        
    },
    input:{
        borderWidth:2,
        borderRadius:40,
        width:'90%',
        marginVertical:12
    },
    card:{
        flexDirection:'row',
        width:'100%',
        backgroundColor:'#c8c8c8',
        borderRadius:40,
        borderWidth:1,
        marginTop:8,
        padding:10
        
}
});

export default AirlineHomePage;