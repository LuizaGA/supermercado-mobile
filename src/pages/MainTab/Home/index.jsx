import {
  Text,
  View,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  Platform
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Header from '../../../components/Header'
import CardProduto from '../../../components/CardProduto'
import imgProduto from '../../../../assets/favicon.png'

export default function Home() {
  const navigation = useNavigation()

  const dataProduto = {imagem: imgProduto, nome: 'nome produto 01'}

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#015F43'
      }}
    >
      <Header />
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Adicionados Recentemente</Text>
        <View style={styles.containerProdutos}>
          <CardProduto dataProduto={dataProduto}/>
          <CardProduto dataProduto={dataProduto}/>
          <CardProduto dataProduto={dataProduto}/>
          <CardProduto dataProduto={dataProduto}/>
          <CardProduto dataProduto={dataProduto}/>
          <CardProduto dataProduto={dataProduto}/>
          <CardProduto dataProduto={dataProduto}/>
          <CardProduto dataProduto={dataProduto}/>
          <CardProduto dataProduto={dataProduto}/>
        </View>
        {/* <Button
          title="perfil"
          onPress={() => {
            navigation.navigate('Perfil')
          }}
        /> */}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    fontSize: 16,
    fontFamily: 'RobotoBold',
    color: '#015F43',
    alignSelf: 'center',
    marginBottom: 8,
  },
  containerProdutos: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 80,
  }
})
