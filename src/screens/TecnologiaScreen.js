import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import CardNoticia from '../components/CardNoticia';
import { noticiasTecnologia } from '../data/noticias';

export default function TecnologiaScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.lista}>
      {noticiasTecnologia.map((noticia) => (
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
