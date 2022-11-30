import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('CovidApp');
        }}>
        <Text style={{fontSize: 16, color: 'black'}}>Covid App</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('AirlineApp');
        }}>
        <Text style={{fontSize: 16, color: 'black'}}>Airline App</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('EarthQuakeApp');
        }}>
        <Text style={{fontSize: 16, color: 'black'}}>EarthQuake App</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('Pagination');
        }}>
        <Text style={{fontSize: 16, color: 'black'}}>Pagination</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('Mesueum');
        }}>
        <Text style={{fontSize: 16, color: 'black'}}>Museum</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  item: {
    borderWidth: 2,
    borderRadius: 40,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Main;
