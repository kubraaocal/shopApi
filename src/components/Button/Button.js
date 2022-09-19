import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './Button.style';

const Button = ({text, onPress, loading}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={loading}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.title}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
