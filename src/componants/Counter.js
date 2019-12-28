import React from "react";

export class Counter extends React.Component {

  incrementScore = () => {
    console.log('incrementScore: ', this);
    // this.state.score += 1;
    this.props.changeScore();
  }
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> -</button>
        <span className="counter-score">{this.props.score}</span>
        {/*이벤트 핸들러 우측에는 함수 선언문이 와야 한다.*/}
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}