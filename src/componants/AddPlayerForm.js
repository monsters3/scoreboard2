import React from 'react';

export class AddPlayerForm extends React.Component {
  state ={
    value: ''
  }

  submit =(e)=>{
    //form의 기본 이벤트 막기 깜박이를 막기위해서 즉 자기 페이지의 재호출을 막기위해
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({value:''});
  }

  handleValueChange =(e)=>{
    console.log(e);
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <form className="form" onSubmit={this.submit}>
        <input type="text" className="input" placeholder="enter a player name" required
               value={this.state.value} onChange={this.handleValueChange}/>
        <input type="submit" className="input" value="add"/>
      </form>
    );
  }
}