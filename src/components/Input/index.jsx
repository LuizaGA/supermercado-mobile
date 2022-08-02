import { useState } from 'react'
import { Text, View , TextInput, StyleSheet} from 'react-native'

export default function Input() {
  const [text, onChangeText] = useState("");

  return (
    <View >
      <TextInput 
      style={styles.container} 
      onChangeText={onChangeText}
      value={text}
      placeholder="useless placeholder"
      keyboardType="numeric"/>
    </View>
 
  )
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: '100%',
    padding: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#"
  }
})
