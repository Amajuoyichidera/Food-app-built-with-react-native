import { StyleSheet, Text, View, Image } from 'react-native';
import FlatButton from '../Components/button';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.food}>Food For {"\n"} Everyone</Text>
      <Image style={styles.people} source={require('../assets/people.png')} />
      <FlatButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF4B3A',
    paddingBottom: 80,
    paddingTop: 70,
  },
  logo: {
    width: 70,
    height: 70,
    marginLeft: 40,
  },
  food: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60,
    textAlign: 'center',
    paddingBottom: 50,
    paddingTop: 30,
  },
  people : {
    height: 400,
    width : 430,
  }
}); 