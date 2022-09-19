import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';

import styles from './Detail.style';
import Loading from '../../components/Loading';

const Detail = ({route}) => {
    const {id} = route.params;
  const {error, loading, data} = useFetch(`${Config.API_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.image}} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price}</Text>
      </View>
    </View>
  );
};

export default Detail;
