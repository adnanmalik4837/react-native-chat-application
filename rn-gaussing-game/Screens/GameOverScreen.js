import React from 'react';
import { StyleSheet,View,Button,Text } from 'react-native';
import colors from '../Constants/colors';
const GameOverScreen=props=>{
    return(
    <View style={styles.screen}>
        <Text>The Game is over!</Text>
        <Text>Number Of Rounds: {props.roundNumber}</Text>
        <Text> Number was: {props.userNumber}</Text>
        <Button title="NEW GAME" onPress={props.onRestart}/>
    </View>);
};
const styles=StyleSheet.create({
screen:
{
  flex:1,
    alignItems:'center',
    justifyContent:'center'
},

});
export default GameOverScreen;