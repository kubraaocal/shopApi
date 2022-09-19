import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const Secondary = () => {
  const list = useSelector(s => s.nameList);
  return (
    <View>
      <Text style={{fontSize: 30}}>İkinci sayfa</Text>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={({item}) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default Secondary;

const styles = StyleSheet.create({});
