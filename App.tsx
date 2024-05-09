import {
  NavigationAction,
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './apps/screen/Home';
import Login from './apps/screen/Login';
import ProductDetails, {Params as ProductDetailsParams} from './apps/screen/ProductDetails';
import ProductAdd from './apps/screen/ProductAdd';
import {Button} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Detalles: ProductDetailsParams;
  ProductAdd: undefined;
  Login: undefined;
};

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

function HomeHeader(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Button title="Agregar" onPress={() => navigation.navigate('ProductAdd')} />
  );
}

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: '#ffa000'},
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: HomeHeader,
          }}
        />
        <Stack.Screen name="Detalles" component={ProductDetails} />
        <Stack.Screen name="ProductAdd" component={ProductAdd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}