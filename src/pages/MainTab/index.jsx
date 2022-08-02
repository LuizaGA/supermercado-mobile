import { Text, View, Image, Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as NavigationBar from 'expo-navigation-bar'

import Home from './Home'
import Buscar from './Buscar'
import Cadastro from './Cadastro'
import Perfil from './Perfil'

import imgHome from '../../../assets/img/House.png'
import imgBuscar from '../../../assets/img/MagnifyingGlass.png'
import imgPerfil from '../../../assets/img/User.png'

const Tab = createBottomTabNavigator()

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#015F43',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          display: 'flex',
          height: Platform.OS == 'ios' ? 80 : 60,
          alignItems: 'center',
          zIndex: 1
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15,
                color: 'white'
              }}
            >
              <Image
                source={imgHome}
                resizeMode="contain"
                style={{
                  width: focused ? 26 : 30,
                  height: focused ? 26 : 30
                }}
              />
              <Text
                style={{
                  color: 'white',
                  marginBottom: focused ? 10 : 0,
                  fontFamily: 'Roboto'
                }}
              >
                {focused ? 'Home' : ''}
              </Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Buscar}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15,
                color: 'white'
              }}
            >
              <Image
                source={imgBuscar}
                resizeMode="contain"
                style={{
                  width: focused ? 26 : 30,
                  height: focused ? 26 : 30
                }}
              />
              <Text
                style={{
                  color: 'white',
                  marginBottom: focused ? 10 : 0,
                  fontFamily: 'Roboto'
                }}
              >
                {focused ? 'Buscar' : ''}
              </Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15,
                color: 'white'
              }}
            >
              <Image
                source={imgPerfil}
                resizeMode="contain"
                style={{
                  width: focused ? 26 : 30,
                  height: focused ? 26 : 30
                }}
              />
              <Text
                style={{
                  color: 'white',
                  marginBottom: focused ? 10 : 0,
                  fontFamily: 'Roboto'
                }}
              >
                {focused ? 'Perfil' : ''}
              </Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}
