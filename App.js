import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts, AlexBrush_400Regular } from '@expo-google-fonts/alex-brush'
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import Alergias from './src/pages/Alergias'
import Produto from './src/pages/Produto'
import SobreNos from './src/pages/SobreNos'
import MainTab from './src/pages/MainTab'
import Buscar from './src/pages/MainTab/Buscar'
import Cadastro from './src/pages/MainTab/Cadastro/'
import Home from './src/pages/MainTab/Home/'
import Perfil from './src/pages/MainTab/Perfil'
import { useEffect } from 'react'

const Stack = createNativeStackNavigator()

export default function App() {
  const [fonteCarregada] = useFonts({
    Roboto: Roboto_400Regular,
    RobotoLight: Roboto_300Light,
    RobotoBold: Roboto_700Bold,
    AlexBrush: AlexBrush_400Regular
  })
  if (!fonteCarregada) {
    return (
      <View>
        <Text>Carregando</Text>
      </View>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Main
          "
            component={MainTab}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Alergias" component={Alergias} />
          <Stack.Screen name="Buscar" component={Buscar} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Perfil" component={Perfil} />
          <Stack.Screen name="Produto" component={Produto} />
          <Stack.Screen name="SobreNos" component={SobreNos} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
