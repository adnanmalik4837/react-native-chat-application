import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
const Header=props=>{
    return(
    <View style={styles.header}>
        <Text style={styles.hearderTitle}>{props.title}</Text>
    </View>);
};
const styles=StyleSheet.create({
header:
{
    width:'100%',
    height:90,
    alignItems:'center',
    justifyContent:'center',

},
hearderTitle:
{
color:'#ffffff',
fontSize:29,
fontWeight:'bold',
backgroundColor:'blue'

}
});
export default Header;