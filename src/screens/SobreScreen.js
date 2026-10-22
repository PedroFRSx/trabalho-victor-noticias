import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function SobreScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.sobre}>
      <Text style={styles.titulo}>Sobre</Text>

      <Image
        source={require('../../assets/sobre.png')}
        style={styles.imagem}
      />

      <Text style={styles.texto}>
        Este Mini App de Notícias foi desenvolvido por
        Pedro Ferraz como atividade acadêmica utilizando
        React Native e Expo.
      </Text>

      <Text style={styles.texto}>
        O aplicativo apresenta notícias de Tecnologia e
        Esportes, utilizando menu lateral, abas inferiores
        e telas de detalhes.
      </Text>

      <View style={styles.areaBotao}>
        <Button
          title="Voltar"
          color="#7A1F3D"
          onPress={() => navigation.navigate('Noticias')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sobre: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    color: '#222222',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagem: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  texto: {
    color: '#444444',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  areaBotao: {
    width: '100%',
    marginTop: 20,
  },
});
