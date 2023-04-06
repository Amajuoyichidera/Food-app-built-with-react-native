import { StyleSheet, Text, View, Image, Pressable, ScrollView} from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.food}>Food For {"\n"} Everyone</Text>
      <Image style={styles.people} source={require('../assets/people.png')} />
       
       <Pressable style={styles.press} onPress={() => navigation.navigate('login')}>
        <Text style={styles.buttonText}>Get Started</Text>
       </Pressable>
     
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF4B3A',
    paddingBottom: 70,
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
    fontSize: 55,
    textAlign: 'center',
    marginRight: 60,
    paddingBottom: 50,
    paddingTop: 30,
    fontFamily: 'kanit-bold',
  },
  people : {
    height: 400,
    width : 430,
  },
  press : {
    borderRadius: 30,
    padding: 20,
    marginRight: 50,
    marginLeft: 50,
    backgroundColor: 'white',
    marginTop: 30,
  },
  buttonText: {
    color: '#FF4B3A',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'kanit-bold',
}
}); 