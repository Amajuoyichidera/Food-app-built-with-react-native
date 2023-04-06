import { StyleSheet, Text, View, Image, Pressable,TextInput, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



export default function Food({ navigation }) {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.icons}>
      <FontAwesome onPress={() => navigation.navigate('Home')}
      name="home" size={40}
      color="black" />
      <Ionicons name="cart-outline" size={40} color="black" />
    </View>

    <View>
    <Text style={styles.deli}>Delicious</Text>
    <Text style={styles.deli2}>Food For You</Text>
    </View>
    
    <View style={styles.myin}>
      <MaterialIcons name="search" size={24} color="black" />
      <TextInput
               style={styles.input}
                placeholder="Search"
                keyboardType= 'default'
                />      
    </View>

    <View>
      <Pressable onPress={() => navigation.navigate('Veggie')} style={styles.veg}>
       <Image source={require('../assets/veggie.png')} />
       <Text style={styles.mix}>Veggie tomato mix</Text>
       <Text style={styles.mon}>$500</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Egg')} style={styles.veg}>
       <Image source={require('../assets/egg.png')} />
       <Text style={styles.mix}>Egg and cucumber</Text>
       <Text style={styles.mon}>$500</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Fried')} style={styles.veg}>
       <Image source={require('../assets/fried.png')} />
       <Text style={styles.mix}>Fried Chicken mix</Text>
       <Text style={styles.mon}>$500</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Moi')} style={styles.veg}>
       <Image source={require('../assets/moi.png')} />
       <Text style={styles.mix}>Moi-moi and ekpa</Text>
       <Text style={styles.mon1}>$500</Text>
      </Pressable>
    </View>
   
    </ScrollView>
    
  );
}


const styles = StyleSheet.create({
   container: {
    paddingTop: 60,
   },
   icons : {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 200,
   },
   deli : {
    fontSize: 40,
    fontWeight: 'bold',
    paddingLeft: 35,
    paddingTop: 40,
    fontFamily: 'kanit-bold',
   },
   deli2 : {
    fontSize: 40,
    fontWeight: 'bold',
    paddingLeft: 35,
    fontFamily: 'kanit-bold',
   },
   myin : {
    flexDirection: 'row',
    backgroundColor: '#EFEEEE',
    padding: 20,
    width: 330,
    borderRadius: 30,
    marginLeft: 35,
    marginTop: 30,
    marginBottom: 30,
    gap: 20,
   },
   veg : {
    marginLeft: 70,
    marginTop: 20,
   },
   mix: {
    marginLeft: 47,
    fontSize: 22,
    fontWeight: '600',
    paddingTop: 30,
    paddingBottom: 20,
    fontFamily: 'kanit-bold',
   },
   mon : {
    color: '#FA4A0C',
    fontWeight : '600',
    marginLeft: 120,
    paddingBottom: 50,
    fontSize: 18,
    fontFamily: 'kanit-bold',
   },
   mon1 : {
    color: '#FA4A0C',
    fontWeight : '600',
    marginLeft: 120,
    paddingBottom: 110,
    fontSize: 18,
    fontFamily: 'kanit-bold',
   }
  }); 