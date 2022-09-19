import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

const Primary = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch('');
  const handleAdd = () => {
      dispatch({type:'ADD_NAME',payload:{name:text}})
  };

  const handleClean=()=>{
      dispatch({type:'CLEAR_LIST'})
  }
  return (
    <SafeAreaView>
      <Text style={{fontSize: 30}}>Birinci sayfa</Text>
      <TextInput value={text} onChangeText={setText} placeholder="İsim giriniz"/>
      <Button title="Ekle" onPress={handleAdd} />
      <Button title="Temizle" onPress={handleClean} />
    </SafeAreaView>
  );
};

export default Primary;

const styles = StyleSheet.create({});
