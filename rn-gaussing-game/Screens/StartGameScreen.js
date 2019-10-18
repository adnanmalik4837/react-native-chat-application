import React,{useState} from 'react';
import { StyleSheet,Alert,View,Text,Button,Keyboard,TouchableWithoutFeedback } from 'react-native';

import Card from '../Components/Card';
import colors from '../Constants/colors';
import Input from '../Components/input';
import NumberContainer from '../Components/NumberContainer';
const StartGameScreen= props =>{
    const [enteredValue,setEnteredValue]=useState('');
    const [confirmed,setconfirmed]=useState(false);
    const [selectednumber,setselectednumber]=useState();
    const numberInputHandler=inputText=>
    {
setEnteredValue(inputText.replace(/[^0-9]/g,''));

    };
    const resetinputHandler=()=>
    {
        setEnteredValue('');
        setconfirmed(false);
    };
    const confirminputHandler=()=>
    {
        const chosenNumber=parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber>99)
        {
            Alert.alert('Invalid number','Number has to be a number between 1 and 99.',[{text:'Okay',style:'destructive',onPress:resetinputHandler}])
            return;
        }
        setconfirmed(true);
        setselectednumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };
    let confirmedOutput;
    if(confirmed)
    {
        confirmedOutput= <Card style={styles.summarycontainer}>
            <Text>You Selected</Text>
                <NumberContainer>{selectednumber}</NumberContainer>
                <Button title="START GAME" onPress={()=>props.onStartGame(selectednumber)}/>
            </Card>
    }
    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
    <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <Input style={styles.input}
             blurOnSubmit
              autoCapitalize='none' 
              autoCorrect={false} 
              keyboardType="number-pad" 
              maxLength={2}
              onChangeText={numberInputHandler}
              value={enteredValue}/>
            <View style={styles.buttonContainer}>
                <View style={styles.resetbutton}> 
                <Button title="Reset" onPress={resetinputHandler} color={colors.accent}/></View>
                <View style={styles.resetbutton}> 
                <Button title="Confirm" onPress={confirminputHandler} color={colors.primary}/></View>
            </View>
        </Card>
        {confirmedOutput}
    </View></TouchableWithoutFeedback>
    );
};
const styles=StyleSheet.create({
screen:
{
    flex:1,
    padding:10,
    alignItems:'center'
},
inputContainer:
{
width:300,
maxWidth:'80%',
alignItems:'center',
},
title:
{
fontSize:20,
marginVertical:10
},
buttonContainer:
{
flexDirection:'row',
width:'100%',
justifyContent:'space-between',
paddingHorizontal:15
},
resetbutton:
{
width:90
},
input:
{
width:50,
textAlign:'center'
},
summarycontainer:
{
marginTop:20,
alignItems:'center'

}
});
export default StartGameScreen;