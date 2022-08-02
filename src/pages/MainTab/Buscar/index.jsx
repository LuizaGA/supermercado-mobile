import { useState } from 'react'
import { Text, View , SafeAreaView, StyleSheet, StatusBar, TextInput, Image, TouchableOpacity} from 'react-native'
import Header from '../../../components/Header'
import imgLupa from '../../../../assets/img/MagnifyingGlassBlack.png'

export default function Buscar() {
  const [com, setCom] = useState(true)
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#015F43' }}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.titulo}>Buscar produtos</Text>
        <TouchableOpacity onPress={() => setCom(!com)}>
          <Text>{com ? 'Com':'Sem' } </Text>
        </TouchableOpacity>
        <View style={styles.containerInput}>
          <TextInput style={{height: '100%', width: '80%'}}/>
          <TouchableOpacity>
            <Image source={imgLupa} style={{height: 20, width: 20, marginRight: 5}}/>
          </TouchableOpacity>
        </View>
      </View>
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
  },
  containerInput: {
    height: 30,
    width: '100%',
    padding: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#015F43",
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
