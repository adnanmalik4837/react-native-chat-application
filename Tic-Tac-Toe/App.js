import React from 'react';
import { StyleSheet,Button, Text,TouchableOpacity,Alert, View } from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons';
import Header from './Components/Header';
export default class App extends React.Component{
  constructor(props)
  {super(props);
    this.state={
      gameState:[
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ],
      currentPlayer:1,
    }  
  }
  componentDidMount()
  {
    this.initializeGame();
  }
  initializeGame=()=>{
this.setState({gameState:
[
  [0,0,0],
  [0,0,0],
  [0,0,0]
],
currentPlayer: 1,
});
  }
  //Return 1 if player 1 won, -1 if player 2 won,or zero if no one won.
  getwinner=()=>
  {const NUM_TILES=3;
    var arr=this.state.gameState;
    var sum;
    //check rows....
    for(var i=0;i<=2;i++)
    {
      sum=arr[i][0]+arr[i][1]+arr[i][2];
      if(sum==3)
      {
        return 1;
      }
      else if(sum==-3)
      {
        return -1;
      }}
    //check columns
    for(var i=0;i<=2;i++)
    {
      sum=arr[0][i]+arr[1][i]+arr[2][i];
      if(sum==3)
      {
        return 1;
      }
      else if(sum==-3)
      {
        return -1;
      }
    }
    // check diagonals 
  
      sum=arr[0][0]+arr[1][1]+arr[2][2];
      if(sum==3)
      {
        return 1;
      }
      else if(sum==-3)
      {
        return -1;
      }
    
      sum=arr[0][2]+arr[1][1]+arr[2][0];
      if(sum==3)
      {
        return 1;
      }
      else if(sum==-3)
      {
        return -1;
      }
      //there are no winners....
      return 0;
  }
 
    onTilePress=(row,col)=>
{
  //Don't allow tiles to change...
  var value=this.state.gameState[row][col];
  if(value !==0){
    return;
  }
  //Grab Current Player
var currentPlayer=this.state.currentPlayer;
//Set the current tile...
var arr=this.state.gameState.slice();
arr[row][col]=currentPlayer;
this.setState({gameState:arr});

//Switch to other player...
var nextplayer=(currentPlayer == 1)?-1:1;
this.setState({currentPlayer:nextplayer});

//check for winners 
var winner=this.getwinner();
if(winner==1)
{
Alert.alert('WINNER','Palyer 1 is the winner!',[{text:'Play Again!',style:'cancel'}]);
this.initializeGame();
}
else if(winner==-1)
{
  Alert.alert('WINNER','Palyer 2 is the winner!',[{text:'Play Again!',style:'cancel'}]);
this.initializeGame();
}
}

onNewGamePress=()=>
{
  this.initializeGame();
}
  renderIcon=(row,col)=>
  {
    var value=this.state.gameState[row][col];
    switch(value)
    {
      case 1:return <Icon name="close" style={styles.tileX}/>
      case -1:return <Icon name="circle-outline" style={styles.tile0}/>
      default:return <View/>
      
    }
  }
  render(){
  return (
  <View style={styles.container}>
  <View style={styles.screen}>
<Header title="TIC TAC TOE GAME "/>
    </View>
    <View style={{flexDirection:"row"}}>
  <TouchableOpacity onPress={()=> this.onTilePress(0,0)} style={[styles.tile,{borderLeftWidth:0,borderTopWidth:0}]}>
   {this.renderIcon(0,0)}
  </TouchableOpacity>
  <TouchableOpacity onPress={()=> this.onTilePress(0,1)} style={[styles.tile,{borderTopWidth:0}]}>
  {this.renderIcon(0,1)}
  </TouchableOpacity>
  <TouchableOpacity onPress={()=> this.onTilePress(0,2)} style={[styles.tile,{borderRightWidth:0,borderTopWidth:0}]}>
  {this.renderIcon(0,2)}
    </TouchableOpacity></View>

  <View style={{flexDirection:"row"}}>
  <TouchableOpacity onPress={()=> this.onTilePress(1,0)} style={[styles.tile,{borderLeftWidth:0}]}>
  {this.renderIcon(1,0)}
  </TouchableOpacity>
  <TouchableOpacity onPress={()=> this.onTilePress(1,1)} style={styles.tile}>
  {this.renderIcon(1,1)}
  </TouchableOpacity>
  <TouchableOpacity onPress={()=> this.onTilePress(1,2)} style={[styles.tile,{borderRightWidth:0}]}>
  {this.renderIcon(1,2)}
    </TouchableOpacity></View>

  <View style={{flexDirection:"row"}}>
  <TouchableOpacity onPress={()=> this.onTilePress(2,0)} style={[styles.tile,{borderLeftWidth:0,borderBottomWidth:0}]}>
  {this.renderIcon(2,0)}
  </TouchableOpacity>
  <TouchableOpacity onPress={()=> this.onTilePress(2,1)} style={[styles.tile,{borderBottomWidth:0}]}>
  {this.renderIcon(2,1)}
  </TouchableOpacity>
  <TouchableOpacity onPress={()=> this.onTilePress(2,2)} style={[styles.tile,{borderRightWidth:0,borderBottomWidth:0}]}>
  {this.renderIcon(2,2)}
    </TouchableOpacity></View>
    <View style={{paddingTop:50}}/>
    <View style={{borderWidth:4,borderRadius:8,borderColor:'green'}}>
    <Button title="New Game" onPress={this.onNewGamePress}/></View>
   </View>
  );
}}

const styles = StyleSheet.create({
  screen:
 {
   padding:50,
  
 },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile:
  {
    borderWidth:10,
    borderColor:'blue',
    width:100,
    height:100,
    alignItems:'center',
    justifyContent:'center',
  },
  tileX:
  { color:"red",
  fontSize:60,
  },
  tile0:
  { color:"green",
  fontSize:60,

  }
});
