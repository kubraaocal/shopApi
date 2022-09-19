import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'pink',
    backgroundColor: '#e0e0e0',
    margin: 10,
    flexDirection:"row"
  },
  image: {
    width: 100,
    minHeight:100,
    resizeMode:"contain",
    backgroundColor:"white"
  },
  bodyContainer: {
      flex:1,
      padding:5,
      justifyContent:"space-between"
  },
  title: {
      fontWeight:"bold",
      fontSize:18
  },
  price: {
      textAlign:"right",
      fontSize:16,
      fontStyle:"italic"
  },
});
