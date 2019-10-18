import React from 'react';
import { StyleSheet,TextInput } from 'react-native';
// import colors from '../Constants/colors';
const input=props=>{
    return(
    <TextInput {...props} style={{...styles.input,...props.style}}/>
        );
};
const styles=StyleSheet.create({
input:
{
    height:30,
    borderBottomColor:'grey',
    borderBottomWidth:1,
    marginVertical:10
}
});
export default input;