import React from 'react';
import './App.css';
import {Header} from './componants/header';
import {Player} from "./componants/Player";

class App extends React.Component {
  state = {
    players: [
      { name: 'LDK', id: 1, score:10},
      { name: 'PARK', id: 2, score:20},
      { name: 'KIM', id: 3, score:30},
      { name: 'LEE', id: 4, score:40}
    ]
  }
  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer: ', id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id);
      return {
        players: players
      }
    })
  }
  handleChangeScore(){
    console.log('hancleChangeScore');
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayer={10 + 1}></Header>

        {
          this.state.players.map(player => (
              <Player name={player.name} key={player.id} id={player.id} score={player.score}
                      removePlayer={this.handleRemovePlayer}
              changeScore={this.handleChangeScore}></Player>
            )
          )
        }
      </div>
    );
  }
}

export default App;
