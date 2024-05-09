import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Product} from './model/Products';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import {RootStackParamList} from '../../App';
import {RouteProp} from '@react-navigation/native';

export type Params = {
  product: Product;
};

export type Props = {
  route: RouteProp<RootStackParamList, 'Detalles'>;
  navigation: StackNavigationProp<RootStackParamList, 'Detalles'>;
};

function ProductDetails ({route}: Props): React.JSX.Element {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setProduct(route.params.product);
  }, [route]);

  return (
    <SafeAreaView>
      {product && (
        <View>
          <Text style={styles.header}>{product.nombre}</Text>
          <Text>Precio: ${product.precio}</Text>
          <Text>Stock Min: {product.minStock}</Text>
          <Text>Stock Max: {product.maxStock}</Text>
          <Text>Stock Minimo: {product.currentStock}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        
    },
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

export default ProductDetails;