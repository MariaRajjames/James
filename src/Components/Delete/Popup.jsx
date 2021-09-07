import React from 'react';

const count = 1;

class Popup extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
    }

    countIncrease = () =>{
        this.setState({count: count++});
    }

    render(){
        return(
            <div>
                <button type="button" onClick = {this.countIncrease}>Click</button>
                <p>{this.state.count}</p> 
            </div>
        );
    }
}

export default Popup;