import { Text, View, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Supermercado SQ</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#015F43',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  },
  texto: {
    fontFamily: 'AlexBrush',
    fontSize: 30,
    color: 'white'
  }
})
