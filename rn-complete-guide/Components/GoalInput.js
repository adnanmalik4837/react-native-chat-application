import React,{useState} from 'react';
import { StyleSheet, View,TextInput,Button,Modal } from 'react-native';

const GoalInput=props =>{
    const [enteredGoal,setEnterGoal]=useState('');
const goalInputHandler=(enteredText) => {
    setEnterGoal(enteredText);

  }
  const addGoalHandelr=()=> {
    props.onAddGoal(enteredGoal);
    setEnterGoal('');
  }
    return ( 
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
       
        <TextInput
         placeholder="Enter Group Name" 
         style={styles.textinput}
          onChangeText={goalInputHandler} 
          value={enteredGoal}/>
          <View style={styles.buttonalgin}>

          <View style={styles.button}>
              <Button title="CANCEL" color="red" onPress={props.onCancel}/></View>

<View style={styles.button}>
        <Button title="ADD" onPress={addGoalHandelr}/></View>
        
        </View>
        </View>
            
            </Modal>
    );
};
const styles = StyleSheet.create({
    button:
    {
     width:'40%'
    },
    buttonalgin:
    {
        flexDirection:'row',
     justifyContent:'space-around',
     width:'60%'
    },
    inputContainer:
 {
flex:1,
  justifyContent:'center',
  alignItems:'center',
 },
    textinput:
 {width:'80%', 
 borderColor:'black',
 borderWidth:1,
 padding:10,
 marginBottom:10

 }
   });
   
export default GoalInput;