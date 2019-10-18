import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import colors from '../Constants/colors';
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
    backgroundColor:colors.primary,
    alignItems:'center',
    justifyContent:'center'
},
hearderTitle:
{
color:'black',
fontSize:18

}
});
export default Header;