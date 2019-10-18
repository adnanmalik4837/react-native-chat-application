import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView,FlatList } from 'react-native';
import GoalItem from './Components/GoalItem'
import GoalInput from './Components/GoalInput'
export default function App() {
const [CourseGoals,setCourseGoals]=useState([]);
const [isAtMode,setIsAtMode]=useState(false);



  const addGoalHandelr= goaTitle=> {
    if(goaTitle.length===0)
    {
      return;
    }
   setCourseGoals(currentGoals => [...currentGoals,{id: Math.random().toString(),value: goaTitle}]);
   setIsAtMode(false);
  }
  const removeGoalHandler=goalId =>{
    setCourseGoals(currentGoals => {return currentGoals.filter((goal)=>goal.id!==goalId);});
  }
  const cancelGoalAddtionHandler=()=>{
    setIsAtMode(false);
  }
  return (
    <View style={styles.screen}>
     <Button title="Add New Group" onPress={()=>setIsAtMode(true)}/>
      <GoalInput visible={isAtMode} onAddGoal={addGoalHandelr} onCancel={cancelGoalAddtionHandler}/>
    <FlatList keyExtractor={(item,index)=>item.id} data={CourseGoals} renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>

    }/>

    </View>
  );
}

const styles = StyleSheet.create({
 screen:
 {
   padding:50
 }

});
