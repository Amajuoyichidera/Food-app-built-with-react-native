import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native';


export default function Login({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
       <View style={styles.one}>
         <Image style={styles.login} source={require('../assets/login.png')} />
         <Text style={styles.logText}>Login</Text>
       </View>
       

       <View style={styles.two}>

        <View style={styles.mail}>
            <Text style={styles.add}>Email Address</Text>
            <TextInput
               style={styles.input}
                placeholder="amajuoyichideradavid@gmail.com"
                keyboardType= 'email-address'
                />
        </View>

        <View  style={styles.mail}>
            <Text style={styles.add}>Password</Text>
            <TextInput
               style={styles.input}
                placeholder="................."
                keyboardType= 'default'
                />
        </View>


        <View style={styles.up}>
        <Text style={styles.forgot}>Forgot Passcode ?</Text>
        <Text onPress={() => navigation.navigate('Sign-Up')} style={styles.sign}>Sign Up</Text>
        </View>

        <Pressable style={styles.press} onPress={() => navigation.navigate('Food')}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

       </View>
    </View>

    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
    container: {
      //  paddingTop: 50,
    },
    one : {
      paddingTop: 100,
      padding: 50,
      paddingLeft: 140,
      backgroundColor: 'white',
    },
    two: {
        backgroundColor: '#F2F2F2',
        paddingBottom: 100,
    },
    login: {
        height: 130,
        width: 130,
    },
    logText : {
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 30,
        textAlign: 'center',
        paddingRight: 90,
      paddingTop: 50,
    },
    mail : {
       paddingTop: 50,
       paddingLeft: 50,
       paddingRight: 50,
    },
    input: {
        marginTop: 20,
        borderBottomColor : 'black',
        borderBottomWidth: 1,
        paddingBottom: 15,
    },
    add :{
        fontSize: 15,
        fontWeight: '500'
    },
    forgot : {
        paddingLeft: 50,
        paddingTop: 50,
        paddingBottom: 30,
        color: '#FA4A0C',
        fontSize: 16,
        fontWeight: '500'
    },
    sign: {
      paddingLeft: 50,
      color: '#FA4A0C',
      fontSize: 16,
      fontWeight: '500',
      paddingTop: 50,
    },
    up: {
      flexDirection: 'row',
      gap: 65,
    },
    press: {
      borderRadius: 30,
      marginTop: 20,
      padding: 20,
      marginRight: 50,
      marginLeft: 50,
      backgroundColor: '#FA4A0C',
  },
  buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 16,
      textAlign: 'center',
  }
}); 