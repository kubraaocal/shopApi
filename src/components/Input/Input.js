import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Input.style'

const Input = ({placeholder,value,onType}) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} onChangeText={onType} value={value} />
        </View>
    )
}

export default Input
