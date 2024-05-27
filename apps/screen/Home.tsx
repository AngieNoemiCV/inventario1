import { StackNavigationProp } from '@react-navigation/stack';
import React, { createContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Product } from './model/Products';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../App';
import LocalDB from './persistence/localbd';

type HomeScreenProps = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRoute = RouteProp<RootStackParamList, 'Home'>;

type HomeProps = {
  navigation: HomeScreenProps;
  route: HomeScreenRoute;
};

function Home({ navigation }: HomeProps): React.JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const productItem = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.productItem}
      onPress={() => navigation.push("Detalles", { product: item })}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column', flexGrow: 9 }}>
          <Text style={styles.itemTitle}>{item.nombre}</Text>
          <Text style={styles.itemDetails}> Precio: $ {item.precio}</Text>
        </View>
        <Text style={
          [
            styles.itemBadge, item.currentStock < item.minStock ? styles.itemBadgeError : null,
          ]
        }>{item.currentStock}</Text>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    LocalDB.init();
      /*const db = await LocalDB.connect();
      db.transaction(async tx => {
        tx.executeSql('SELECT * FROM productos', [], (_, res) => {
          let prods = [];

          for (let i = 0; i < res.rows.length; i++) {
            prods.push(res.rows.item(i));
          }
          setProducts(prods);
        },
          error => console.error({ error }),
        );
      });*/
      navigation.addListener('focus', async() => {
        try{
      const response = await fetch(
        'http://${WebServicesParams.host}:${WebServicesParams.port}/productos',
        {
          method: 'GET',
          headers: {
            'Accept' : 'aplicacion/json',
            'Content-Type' : 'text/plain',
          },
        },
      );
      setProducts (await response.json());
    } catch (error){
      console.error(error);
    }
  });
  }, [navigation]);


  return (
    <SafeAreaView>
      <FlatList
        data={products}
        renderItem={productItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productItem: {
    padding: 12,
    borderBottomColor: '#c0c0c0',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  itemTitle: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    // textTransform: 'uppercase',
  },
  itemDetails: {
    fontSize: 14,
    opacity: 0.7,
  },
  itemBadge: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  itemBadgeError: {
    color: 'red',
  },
});

export default Home;
