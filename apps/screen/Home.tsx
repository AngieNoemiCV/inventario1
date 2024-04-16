import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined

}
type HomeScreenProps = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRoute = RouteProp<RootStackParamList, 'Home'>;

type HomeProps = {
  navigation: HomeScreenProps;
  route: HomeScreenRoute;
};


function Home({navigation}: HomeProps): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>Hola</Text>
      <Button title='Navegar' onPress={() => navigation.navigate('Home')}/>
    </SafeAreaView>
  );
}

export default Home;
