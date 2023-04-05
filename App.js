import Home from './Components/Home';
import Login from './Components/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Components/SignUp';
import Food from './Components/Foods';

const Stack = createNativeStackNavigator();

export default function App() {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}