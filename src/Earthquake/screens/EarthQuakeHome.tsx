import {useState, useReducer, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {getData} from '../../Covid/reducers/service';
import {EarthQuakeReducer, initailState} from '../reducer/reducer';
import {GetEarthQuakeData} from '../reducer/service';

const EarthQuakeHome = ({navigation}) => {
  const [state, dispatch] = useReducer(EarthQuakeReducer, initailState);
  useEffect(() => {
    const getData = async () => {
      var data = await GetEarthQuakeData();
      if (data !== 'error') {
        dispatch({type: 'FETCH', payload: data});
      } else {
        dispatch({type: 'FETCH_ERROR'});
      }
    };
    getData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate("DetailsEath",{item:item.properties})
        }}
        >
          <Image
            source={{uri: item.url}}
            style={{height: 80, width: 60, resizeMode: 'contain'}}
          />
          <View style={{flexDirection: 'column', marginLeft: 8}}>
            <Text>Title: {item.properties.title}</Text>
            <Text>Magnitude: {item.properties.mag}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  if (state?.loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={60} color="red" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={state?.data.features}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#c8c8c8'
  },
  card: {
    marginTop: 10,
    backgroundColor: '#f7f7f0',
    borderRadius: 60,
    width: '90%',
    padding: 14,
    flexDirection: 'row',
    alignContent:'flex-start',
    justifyContent:'space-evenly',
    elevation:6
  },
});

export default EarthQuakeHome;
