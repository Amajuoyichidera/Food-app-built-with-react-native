import { StyleSheet, Text, View, Image, Pressable, ScrollView} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Veggie({ navigation }) {
  return (
    <ScrollView style={styles.all}>

    <View style={styles.icons}>
     <FontAwesome5 onPress={() => navigation.navigate('Food')}  name="less-than" size={24} color="black" />
     <FontAwesome5 name="heart" size={24} color="black" />      
    </View>

     <View style={styles.one}>
        <Image source={require('./image/veggie.png')} />    
        <Text style={styles.mix}>Veggie tomato mix</Text>
        <Text style={styles.mon}>$500</Text>
     </View>

    <View style={styles.deliver}>
        <Text style={styles.info}>Delivery info</Text>
        <Text style={styles.text}>
            Delivered between monday and {"\n"} thursday 20 from 8pm to 91:32 pm 
        </Text>
    </View>

    <View style={styles.deliver}>
        <Text style={styles.info}>Return policy</Text>
        <Text style={styles.text}>
            All our foods are double checked before {"\n"} leaving our stores so by any case you {"\n"} found a broken food please contact our {"\n"} hotline immediately
        </Text>
    </View> 
    
    
    <Pressable style={styles.press} onPress={() => navigation.navigate('Food')}>
        <Text style={styles.buttonText}>Add to cart</Text>
    </Pressable> 
     


    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
    press: {
        borderRadius: 30,
        marginTop: 30,
        padding: 20,
        marginRight: 50,
        marginLeft: 50,
        backgroundColor: '#FA4A0C',
        marginBottom: 100,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'kanit-bold',
    },
    all: {
        paddingTop: 80,
    },
    icons : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 200,
       },
       mix: {
        marginLeft: 27,
        fontSize: 25,
        fontWeight: '600',
        paddingTop: 30,
        paddingBottom: 20,
        fontFamily: 'kanit-bold',
       },
       mon : {
        color: '#FA4A0C',
        fontWeight : '600',
        marginLeft: 110,
        paddingBottom: 50,
        fontSize: 18,
        fontFamily: 'kanit-bold',
       },
       one : {
        marginLeft: 70,
        marginTop: 40,
       },
       deliver : {
        marginLeft: 50,
       },
       info : {
        fontFamily: 'kanit-bold',
        fontSize: 20,
        paddingBottom: 20,
        paddingTop: 20,
       },
       text: {
        fontSize: 15,
        fontFamily: 'kanit-regular',
        lineHeight: 30,
       }

}); 