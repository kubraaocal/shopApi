import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

import ProductsCard from '../../components/Card/ProductsCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error/Error';

const Products = ({navigation}) => {
  const {error, loading, data} = useFetch(Config.API_URL);

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProducts = ({item}) => (
    <ProductsCard
      product={item}
      onSelect={() => handleProductSelect(item.id)}
    />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  
  return (
    <View>
      <FlatList data={data} renderItem={renderProducts} />
    </View>
  );
};

export default Products;
