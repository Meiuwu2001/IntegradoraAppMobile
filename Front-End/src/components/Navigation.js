import React ,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Loginsecreen';
import SplashScreen from '../screens/SplashScreen';
import RegisterScreen from '../screens/Registersecreen';
import { AuthContext } from '../context/AuthContext.js';
import Inicio from '../screens/Inicio';
import BottomTab from './BottomTab';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {splashLoading ? (
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          ) : userInfo.token ? (
          <Stack.Screen name="Dronautica" component={BottomTab} />
          ) : (
            <>
             <Stack.Screen
              name="Inicio"
              component={Inicio}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
            </>
          )} 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
