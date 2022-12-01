import React, {useState, useReducer, useEffect} from 'react';
import {
  ActionSheetIOS,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
} from 'react-native';
import {initailState, reducer} from '../reducers/reducers';
import {getData} from '../reducers/service';

const CovidHomePage = () => {
  const [text, setText] = useState('');

  const [state, dispatch] = useReducer(reducer, initailState);

  useEffect(() => {

  }, [state]);
  
//   console.log('called');
//   console.log(d);

  

  const search = async id => {
    var d = await getData(id);
    dispatch({type: 'FETCH', payload: d});
  };


  const Loading = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={60} color="red" />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="saerch here..."
        onChangeText={t => search(t)}
        style={styles.input}
      />
      {state?.loading ? (
        <Loading />
      ) : (
        <View style={styles.card}>
          <Image
            source={{uri: state?.data.logo}}
            style={{height: 80, width: 60, resizeMode: 'contain'}}
          />
          <View style={{flexDirection: 'column',marginLeft:8}}>
            <Text>{state?.data.id}</Text>
            <Text>{state?.data.name}</Text>
            <Text>{state?.data.country}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  input: {
    borderWidth: 2,
    borderRadius: 40,
    width: '90%',
    padding: 10,
  },
  card: {
    marginTop: 10,
    backgroundColor: '#c8c8c8',
    borderRadius: 60,
    width: '90%',
    padding: 14,
    flexDirection: 'row',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default CovidHomePage;