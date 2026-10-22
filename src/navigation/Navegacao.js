import {
  Pressable,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TecnologiaScreen from '../screens/TecnologiaScreen';
import EsportesScreen from '../screens/EsportesScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import SobreScreen from '../screens/SobreScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const StackTecnologia = createNativeStackNavigator();
const StackEsportes = createNativeStackNavigator();

// Botao que abre o menu lateral
function BotaoMenu({ navigation }) {
  return (
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
  );
}

// Stack de Tecnologia
function NavegacaoTecnologia() {
  return (
    <StackTecnologia.Navigator>
      <StackTecnologia.Screen
        name="Lista"
        component={TecnologiaScreen}
        options={({ navigation }) => ({
          title: 'Notícias',
          headerLeft: () => (
            <BotaoMenu navigation={navigation} />
          ),
        })}
      />

      <StackTecnologia.Screen
        name="Detalhes"
        component={DetalhesScreen}
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
        component={EsportesScreen}
        options={({ navigation }) => ({
          title: 'Notícias',
          headerLeft: () => (
            <BotaoMenu navigation={navigation} />
          ),
        })}
      />

      <StackEsportes.Screen
        name="Detalhes"
        component={DetalhesScreen}
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

// Drawer principal do aplicativo
export default function Navegacao() {
  return (
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
        component={SobreScreen}
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
  );
}

const styles = StyleSheet.create({
  botaoMenu: {
    marginRight: 15,
  },
});
