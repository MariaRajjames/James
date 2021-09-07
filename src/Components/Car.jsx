import React from 'react';

class Car extends React.Component{
  constructor(props){
    super(props);
    this.state = {model: "Ford", color: "Red"};
  }

  changeColor = () => {
    this.setState ({color: "Blue"});
  }

  render (){
    return (
      <div>
        <h1>the {this.state.model}</h1>
        <p>car color is {this.state.color}</p>
        <button type="button" onClick={this.changeColor}>Enter</button>
      </div>
    );
  }
}



export default Car;