import {StatusBar, Appearance} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider as PaperProvider} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import IntroductionScreen from './src/components/screens/introduction.screen';
import MapScreen from './src/components/screens/map.screen';
import Colors from './src/assets/utils/MainColors';
import SearcherScreen from './src/components/screens/searcher.screen';
import EndpointProvider from './src/contexts/endpoint.context';
import FavouriteScreen from './src/components/screens/favourite.screen';
import UserScreen from './src/components/screens/user.screen';
import InfoScreen from './src/components/screens/info.screen';
import AuthProvider from './src/contexts/auth.context';
import './languages/i18n';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// Ignore log notification by message
LogBox.ignoreAllLogs();

const TabNavigator = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="map"
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: Colors.primary800},
        headerTintColor: Colors.primary50,
        tabBarStyle: {backgroundColor: Colors.primary800},
        tabBarActiveTintColor: 'white',
      }}
      sceneContainerStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="user"
        component={UserScreen}
        options={{
          tabBarIcon: () => {
            return <Icon name="account" size={32} color="white" />;
          },
          title: 'Perfil',
        }}
      />
      <Tab.Screen
        name="info"
        component={InfoScreen}
        options={{
          tabBarIcon: () => {
            return <Icon name="information-variant" size={32} color="white" />;
          },
          title: 'Informació',
        }}
      />
      <Tab.Screen
        name="map"
        component={MapScreen}
        options={{
          tabBarIcon: () => {
            return <Icon name="map-marker-radius" size={32} color="white" />;
          },
          title: 'Mapa',
        }}
      />
      <Tab.Screen
        name="searcher"
        component={SearcherScreen}
        options={{
          headerShown: false,
          title: 'Cercador',
          tabBarIcon: () => {
            return <Icon name="magnify" size={32} color="white" />;
          },
        }}
      />
      <Tab.Screen
        name="fav"
        component={FavouriteScreen}
        options={{
          headerShown: false,
          title: 'Preferits',
          tabBarIcon: () => {
            return <Icon name="star" size={32} color="white" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  Appearance.setColorScheme('light');
  return (
    <>
      <AuthProvider>
        <EndpointProvider>
          <PaperProvider>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="menu" component={TabNavigator} />
                <Stack.Screen
                  name="introduction"
                  component={IntroductionScreen}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </EndpointProvider>
        <StatusBar
          backgroundColor={Colors.primary800}
          barStyle={'light-content'}
        />
      </AuthProvider>
    </>
  );
}
