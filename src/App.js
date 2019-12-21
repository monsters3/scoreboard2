import React from 'react';
import './App.css';

function App() {
  const Header = (props) => {
    console.log(props);
    return (
      <header className="header">
        <h1 className="h1">{props.title}</h1>
        <span className="start">{props.totalplayer}</span>
      </header>
    );
  }


  const Player = (props) => {
    console.log(props);
    return (
      <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={()=>props.removerPlayer(props.id)}>X</button>
        {props.name}
      </span>
        <Counter/>
      </div>
    );
  }

  class Counter extends React.Component {
    constructor() {
      super();
      this.state = {
        score: 30
      }
    }

    incrementScore() {
      //console.log(this);
      //onClick={this.incrementScore}
      // 비동기로 작동이 되기 때문에 this가 바인딩이안됨. 즉,[큐]라는곳에 저장이되었다가 실행이끝나고 실행이 되기때문.
      //onClick={this.incrementScore.bind(this)}
      //이렇게 명시적으로 바인딩을 시켜주면 됨.
      // this.state.score+=1; 이는 UI렌더링이 안되고 모델값만 바뀜
      this.setState(prevState => ({score: prevState.score + 1}));
    }

    render() {
      return (
        <div className="counter">
          <span className="player-name">{this.props.name}</span>
          <div>
            <button className="counter-score decrement">-</button>
            <span className="counter-score">{this.state.score}</span>
            {/*이벤트 핸들러 우측에는 반드시 함수 선언문이 와야한다*/}
            <button className="counter-score increment" onClick={this.incrementScore.bind(this)}>+</button>
          </div>
        </div>
      );
    }
  }

  class App extends React.Component {
    state = {
      players: [
        {name: 'LDK', id: 1},
        {name: 'PARK', id: 2},
        {name: 'LEE', id: 3},
        {name: 'KIM', id: 4}
      ]
    }

    handleRemovePlayer = (id) => {
      console.log('handleRemovePlayer:'+ id);
      this.setState(prevState=>{
        const players = prevState.players.filter(player => player.id!==id);

        return {
          players: players
        }
      });
    }

    render() {
      return (
        <div className="scoreboard">
          <Header title="My Scoreboard" totalplayer={10 + 1}></Header>

          {
            this.state.players.map(player => {
              return (
                <Player name={player.name} key={player.id} id={player.id} removerPlayer={this.handleRemovePlayer}></Player>
              )
            })
          }
        </div>
      );
    }


  }
}

export default App;
