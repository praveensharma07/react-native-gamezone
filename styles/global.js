import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      margin:0,
      backgroundColor: '#161616',
      justifyContent:'flex-start'
    },
    text: {
        color:'white',
        fontSize:14,
        margin:4,
    },
    row: {
        flexDirection:'row',
        marginTop:15,
    },
    box:{
        flex:0,
        backgroundColor:'#000000',
        borderRadius: 30,
        padding: 20,
        alignItems: 'center',
        marginLeft:5,
    },
    boxSmall:{
        backgroundColor:'#000000',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        height:94,
        marginLeft:15,
    },
    boxLarge:{
        flex:3,
        backgroundColor:'#000000',
        borderRadius: 20,
        padding: 22,
        alignItems: 'center',
        margin:10,
    },
  });