import { useEffect } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

export default function DetalhesScreen({ route, navigation }) {
  const noticia = route.params.noticia;

  // Altera o titulo do cabecalho
  useEffect(() => {
    navigation.setOptions({
      title: noticia.titulo,
    });
  }, [navigation, noticia.titulo]);

  return (
    <ScrollView contentContainerStyle={styles.detalhes}>
      <Text style={styles.categoria}>{noticia.categoria}</Text>
      <Text style={styles.data}>{noticia.data}</Text>
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.conteudo}>{noticia.conteudo}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detalhes: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  conteudo: {
    color: '#444444',
    fontSize: 16,
  },
});
