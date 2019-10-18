import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet,View,Text,Alert ,Button} from 'react-native';
import colors from '../Constants/colors';
import NumberContainer from '../Components/NumberContainer';
import Card from '../Components/Card';
const generateRandomBetween=(min,max,exclude)=>
{
    min=Math.ceil(min);
    max=Math.floor(max);
    const rndNum=Math.floor(Math.random()*(max-min))+min;
    if(rndNum==exclude)
    {
        return generateRandomBetween(min,max,exclude);
    }
    else
    {
        return rndNum;
    }
}
const GameScreen=props=>{
const [currentGuess,setCurrentGuess]=useState(generateRandomBetween(1,100,props.userchoice));
const [Rounds,setRounds]=useState(0);
const currentLow=useRef(1);
const currentHigh=useRef(100);
const {userchoice,onGameOver}=props;
useEffect(()=>{
if(currentGuess===userchoice)
{
onGameOver(Rounds);
}
},[currentGuess,userchoice,onGameOver]);
const nextGuessHandler=direction=>{
if((direction==='lower' && currentGuess < props.userchoice)||(direction==='greater' && currentGuess > props.userchoice))
{
Alert.alert('Don\'t lie!','You Know that this wrong ....',[{text:'sorry!',style:'cancel'}]);
return;
}
if(direction==='lower')
{
    currentHigh.current=currentGuess;
}
else
{
    currentLow.current=currentGuess;
}
const nextnumber=generateRandomBetween(currentLow.current,currentHigh.current);
setCurrentGuess(nextnumber);
setRounds(curRounds=>curRounds+1);
}; 
return(
        <View style={styles.screen}> 
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttoncontainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this,'lower')}></Button>
                <Button title="GREATER" onPress={nextGuessHandler.bind(this,'greater')}>></Button>
                
            </Card>
        </View>
    );
};
const styles=StyleSheet.create({
screen:
{
    flex:1,
    padding:10,
    alignItems:'center'
},
buttoncontainer:
{
flexDirection:'row',
justifyContent:'space-around',
marginTop:20,
width:300,
maxWidth:'80%'
}
}
);
export default GameScreen;