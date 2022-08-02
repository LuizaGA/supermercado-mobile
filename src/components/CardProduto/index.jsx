import { Text, View, Image } from 'react-native'
import {Container, Texto} from './styles'

export default function CardProduto({dataProduto}) {
  return (
    <Container>
      <Image source={dataProduto.imagem}/>
      <Texto>{dataProduto.nome}</Texto>
    </Container>
  )
}
