import React from "react";

export class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={() => this.props.changeScore(this.props.id, -1)}> -</button>
        <span className="counter-score">{this.props.score}</span>
        {/*이벤트 핸들러 우측에는 함수 선언문이 와야 한다.*/}
        <button className="counter-action increment"
                onClick={() => this.props.changeScore(this.props.id, 1)}> + </button>
      </div>
    );
  }
}