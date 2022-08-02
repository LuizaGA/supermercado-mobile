import { Text, View , SafeAreaView, StyleSheet, StatusBar} from 'react-native'
import Header from '../../../components/Header'

export default function Buscar() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#015F43' }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Buscar produtos</Text>
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
  }
})
