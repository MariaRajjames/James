import React, {Component} from 'react';

class Newlist extends React.Component {
    constructor(){
        super();
        this.state = {
            LogIn: false
        };
    }
    render(){

        if(this.state.LogIn){
            return <h1>Welcome Home</h1>;
        }else{
            return <h1>Welcome Guest</h1>;
        }

    }
}


export default Newlist;