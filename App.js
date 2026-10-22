import 'react-native-gesture-handler';

import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import {Button,Image,Pressable,ScrollView,StyleSheet,Text,View,} from 'react-native';

import {SafeAreaProvider,SafeAreaView,} from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

// Navegadores
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const StackTecnologia = createNativeStackNavigator();
const StackEsportes = createNativeStackNavigator();

// Notícias de Tecnologia
const noticiasTecnologia = [
  {
    id: 1,
    categoria: 'Tecnologia',
    data: '15/10/2026',
    titulo: 'Windows 11 recebe novas melhorias',
    resumo: 'Atualização traz mais velocidade e novos recursos.',
    conteudo:
      'A Microsoft anunciou melhorias para o Windows 11. A atualização busca deixar o sistema mais rápido e confiável, além de trazer novidades para jogos, pesquisa, fotos e integração entre celular e computador.',
  },
  {
    id: 2,
    categoria: 'Tecnologia',
    data: '21/09/2026',
    titulo: 'Inteligência artificial ajuda pesquisas químicas',
    resumo: 'Novo modelo auxilia cientistas na criação de moléculas.',
    conteudo:
      'Pesquisadores desenvolveram o RetroChimera. Essa inteligência artificial ajuda a planejar como moléculas podem ser produzidas em laboratório, apoiando pesquisas de medicamentos e novos materiais.',
  },
];

// Notícias de Esportes
const noticiasEsportes = [
  {
    id: 1,
    categoria: 'Esportes',
    data: '19/10/2026',
    titulo: 'Brasil avança às finais do Mundial de Ginástica',
    resumo: 'Rebeca, Flávia e Lorrane garantem vagas nas decisões.',
    conteudo:
      'O Brasil se classificou para cinco finais femininas no Mundial de Ginástica Artística. Rebeca Andrade liderou a classificação do salto, enquanto Flávia Saraiva e Lorrane Oliveira também avançaram.',
  },
  {
    id: 2,
    categoria: 'Esportes',
    data: '19/10/2026',
    titulo: 'Flamengo mantém liderança do Brasileirão',
    resumo: 'Vitória sobre o Bahia colocou o time na primeira posição.',
    conteudo:
      'O Flamengo venceu o Bahia por 3 a 0 e voltou à liderança do Campeonato Brasileiro de 2026, ficando um ponto à frente do Palmeiras.',
  },
];

// Componente reutilizável para mostrar uma notícia
function CardNoticia({ noticia, navigation }) {
  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        navigation.navigate('Detalhes', {
          noticia: noticia,
        })
      }
    >
      <Text style={styles.categoria}>
        {noticia.categoria}
      </Text>

      <Text style={styles.data}>
        {noticia.data}
      </Text>

      <Text style={styles.tituloCard}>
        {noticia.titulo}
      </Text>

      <Text style={styles.resumo}>
        {noticia.resumo}
      </Text>
    </Pressable>
  );
}

// Tela com a lista de Tecnologia
function TelaTecnologia({ navigation }) {
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

// Tela com a lista de Esportes
function TelaEsportes({ navigation }) {
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

// Tela de detalhes
function TelaDetalhes({ route, navigation }) {
  const noticia = route.params.noticia;

  // Altera o título do cabeçalho
  useEffect(() => {
    navigation.setOptions({
      title: noticia.titulo,
    });
  }, [navigation, noticia.titulo]);

  return (
    <ScrollView contentContainerStyle={styles.detalhes}>
      <Text style={styles.categoria}>
        {noticia.categoria}
      </Text>

      <Text style={styles.data}>
        {noticia.data}
      </Text>

      <Text style={styles.tituloDetalhes}>
        {noticia.titulo}
      </Text>

      <Text style={styles.conteudo}>
        {noticia.conteudo}
      </Text>
    </ScrollView>
  );
}

// Stack de Tecnologia
function NavegacaoTecnologia() {
  return (
    <StackTecnologia.Navigator>
      <StackTecnologia.Screen
        name="Lista"
        component={TelaTecnologia}
        options={({ navigation }) => ({
          title: 'Notícias',

          headerLeft: () => (
            <Pressable
              style={styles.botaoMenu}
              onPress={() =>
                navigation
                  .getParent()
                  .getParent()
                  .openDrawer()
              }
            >
              <Ionicons
                name="menu"
                size={26}
                color="#222222"
              />
            </Pressable>
          ),
        })}
      />

      <StackTecnologia.Screen
        name="Detalhes"
        component={TelaDetalhes}
      />
    </StackTecnologia.Navigator>
  );
}

// Stack de Esportes
function NavegacaoEsportes() {
  return (
    <StackEsportes.Navigator>
      <StackEsportes.Screen
        name="Lista"
        component={TelaEsportes}
        options={({ navigation }) => ({
          title: 'Notícias',

          headerLeft: () => (
            <Pressable
              style={styles.botaoMenu}
              onPress={() =>
                navigation
                  .getParent()
                  .getParent()
                  .openDrawer()
              }
            >
              <Ionicons
                name="menu"
                size={26}
                color="#222222"
              />
            </Pressable>
          ),
        })}
      />

      <StackEsportes.Screen
        name="Detalhes"
        component={TelaDetalhes}
      />
    </StackEsportes.Navigator>
  );
}

// Abas de Tecnologia e Esportes
function AbasNoticias() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7A1F3D',
      }}
    >
      <Tab.Screen
        name="Tecnologia"
        component={NavegacaoTecnologia}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="hardware-chip-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Esportes"
        component={NavegacaoEsportes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="football-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Tela Sobre
function TelaSobre({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.sobre}>
      <Text style={styles.tituloSobre}>
        Sobre
      </Text>

      <Image
        source={require('./assets/sobre.png')}
        style={styles.imagemSobre}
      />

      <Text style={styles.textoSobre}>
        Este Mini App de Notícias foi desenvolvido por
        Pedro Ferraz como atividade acadêmica utilizando
        React Native e Expo.
      </Text>

      <Text style={styles.textoSobre}>
        O aplicativo apresenta notícias de Tecnologia e
        Esportes, utilizando menu lateral, abas inferiores
        e telas de detalhes.
      </Text>

      <View style={styles.areaBotao}>
        <Button
          title="Voltar"
          color="#7A1F3D"
          onPress={() =>
            navigation.navigate('Noticias')
          }
        />
      </View>
    </ScrollView>
  );
}

// Aplicativo principal
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Noticias"
            screenOptions={{
              drawerActiveTintColor: '#7A1F3D',
            }}
          >
            <Drawer.Screen
              name="Noticias"
              component={AbasNoticias}
              options={{
                title: 'Notícias',
                headerShown: false,

                drawerIcon: ({ color, size }) => (
                  <Ionicons
                    name="newspaper-outline"
                    size={size}
                    color={color}
                  />
                ),
              }}
            />

            <Drawer.Screen
              name="Sobre"
              component={TelaSobre}
              options={{
                drawerIcon: ({ color, size }) => (
                  <Ionicons
                    name="information-circle-outline"
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>

        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  lista: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: '#F5F5F5',
  },

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

  tituloCard: {
    color: '#222222',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  resumo: {
    color: '#555555',
    fontSize: 14,
  },

  botaoMenu: {
    marginRight: 15,
  },

  detalhes: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },

  tituloDetalhes: {
    color: '#222222',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  conteudo: {
    color: '#444444',
    fontSize: 16,
  },

  sobre: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  tituloSobre: {
    color: '#222222',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  imagemSobre: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },

  textoSobre: {
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