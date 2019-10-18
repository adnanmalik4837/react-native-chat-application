import React,{useState} from 'react';
import { StyleSheet,View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GamesScreen';
import GameOverScreen from './Screens/GameOverScreen';

export default function App() {
  const [userNumber,setuserNumber]=useState();
  const [guessRounds,setguessrounds]=useState(0);
  const Configurenewgame=()=>
  {
setguessrounds(0);
setuserNumber(null);
  };
  const startGamehanndler=(selectedNumber)=>
  {
    setuserNumber(selectedNumber);
    setguessrounds(0);
  }
  const gameoverhandler=numofrounds=>
  {
setguessrounds(numofrounds);
  };
  let content=<StartGameScreen onStartGame={startGamehanndler} />;
  if(userNumber&& guessRounds<=0)
  {
    content=<GameScreen userchoice={userNumber} onGameOver={gameoverhandler}/>;
  }
  else if(guessRounds>0)
  {
    content=<GameOverScreen roundNumber={guessRounds} userNumber={userNumber} onRestart={Configurenewgame}/>;
  }
  return (
    <View style={styles.screen}>
<Header title="Guess a Number"/>

{content}
    </View>
  );
}

const styles = StyleSheet.create({
 screen:
 {
   flex:1
 }
});
