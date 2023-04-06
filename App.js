import Home from './Components/Home';
import Login from './Components/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Components/SignUp';
import Food from './Components/Foods';
import Veggie from './Components/foodDetails/veggieDetail';
import Egg from './Components/foodDetails/eggDetail';
import Fried from './Components/foodDetails/friedDetail';
import Moi from './Components/foodDetails/moiDetail'
import { useFonts  } from 'expo-font';
import React, { useEffect } from 'react';
import * as Splashscreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'kanit-bold': require('./assets/fonts/Kanit-Bold.ttf'),
    'kanit-medium': require('./assets/fonts/Kanit-Medium.ttf'),
    'kanit-regular': require('./assets/fonts/Kanit-Regular.ttf')
  });

  useEffect(() => {
    async function prepare () {
      await Splashscreen.preventAutoHideAsync(); 
    }
    prepare();
  }, [])

if(!fontsLoaded) {
  return undefined;
} else {
  Splashscreen.hideAsync();
}

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name='Home'
         component={Home}
         options={{ headerShown: false}}
         />
         <Stack.Screen
          name='login'
          component={Login} 
          options={{ headerShown: false}}         
          />
          <Stack.Screen
          name='Sign-Up'
          component={SignUp}
          options={{ headerShown: false}}
           />
           <Stack.Screen
          name='Food'
          component={Food}
          options={{ headerShown: false}}
           />
            <Stack.Screen
          name='Veggie'
          component={Veggie}
          options={{ headerShown: false}}
           />
             <Stack.Screen
          name='Egg'
          component={Egg}
          options={{ headerShown: false}}
           />
             <Stack.Screen
          name='Fried'
          component={Fried}
          options={{ headerShown: false}}
           />
             <Stack.Screen
          name='Moi'
          component={Moi}
          options={{ headerShown: false}}
           />
      </Stack.Navigator>
    </NavigationContainer>
  );
}