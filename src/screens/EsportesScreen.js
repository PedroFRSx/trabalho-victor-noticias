import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import CardNoticia from '../components/CardNoticia';
import { noticiasEsportes } from '../data/noticias';

export default function EsportesScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.lista}>
      {noticiasEsportes.map((noticia) => (
        <CardNoticia
          key={noticia.id}
          noticia={noticia}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lista: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: '#F5F5F5',
  },
});
