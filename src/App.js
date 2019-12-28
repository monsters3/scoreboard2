import React from 'react';
import './App.css';
import {Header} from './componants/Header';
import {Player} from "./componants/Player";
import {AddPlayerForm} from "./componants/AddPlayerForm";

let maxId=4;

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
    });
  }
  handleChangeScore = (id, delta) => {
    console.log('handleChangeScore: ', id, delta);
    this.setState(prevState => {
      const players = [ ...prevState.players ]
      players.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      })
      // state가 배열일 경우 새로운 배열을 리턴
      return { players}
    });
  }
  handleAddPlayer =(name)=>{
    console.log('handleAddPlayer', name);
    this.setState(prevState => {
      const players=[...prevState.players];
      players.push({name:name, id: ++maxId, score: 0});
      return { players }
    });
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.state.players}></Header>

        {
          this.state.players.map(player => (
              <Player name={player.name} key={player.id} id={player.id} score={player.score}
                      removePlayer={this.handleRemovePlayer}
                      changeScore={this.handleChangeScore}>
              </Player>
            )
          )
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer}></AddPlayerForm>
      </div>
    );
  }
}

export default App;
