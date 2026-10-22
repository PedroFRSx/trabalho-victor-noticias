import {
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

// Componente reutilizavel para mostrar uma noticia
export default function CardNoticia({ noticia, navigation }) {
  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        navigation.navigate('Detalhes', {
          noticia: noticia,
        })
      }
    >
      <Text style={styles.categoria}>{noticia.categoria}</Text>
      <Text style={styles.data}>{noticia.data}</Text>
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.resumo}>{noticia.resumo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  categoria: {
    color: '#7A1F3D',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  data: {
    color: '#777777',
    fontSize: 12,
    marginBottom: 5,
  },
  titulo: {
    color: '#222222',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resumo: {
    color: '#555555',
    fontSize: 14,
  },
});
