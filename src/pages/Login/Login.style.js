import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#64b5f6"
    },
    logo:{
        height:deviceSize.height/3,
        width:deviceSize.width*0.9,
        resizeMode:"contain",
        alignSelf:"center",
        tintColor:"white"
    },
    logo_container:{
        flex:1,
        justifyContent:"center"
    },
    body_container:{
        flex:1
    }
})