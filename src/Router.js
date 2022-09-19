import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login/Login';
import Primary from './pages/Primary';
import Secondary from './pages/Secondary';
import UserProvider from './context/Provider';
import {useSelector} from 'react-redux';
import Loading from './components/Loading';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  const userSession = useSelector(s => s.user);
  const isLoading = useSelector(s => s.isAuthLoading);
  return (
    // <UserProvider>
    <NavigationContainer>
      {isLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="ProductsPage"
            component={Products}
            options={{
              title: 'Dükkan',
              headerStyle: {backgroundColor: '#64b5f6'},
              headerTitleStyle: {color: 'wihte'},
            }}
          />
          <Stack.Screen name="DetailPage" component={Detail} />
        </Stack.Navigator>
      )}

      {/* <Tab.Navigator>
          <Tab.Screen name="Primary" component={Primary} />
          <Tab.Screen name="Secondary" component={Secondary} />
        </Tab.Navigator> */}
    </NavigationContainer>
    // </UserProvider>
  );
};

export default Router;

const styles = StyleSheet.create({});
