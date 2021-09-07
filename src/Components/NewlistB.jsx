import React, { Component } from 'react';

class NewlistB extends React.Component{
    constructor(){
        super();
        this.state = {
            MethB: false
        };
    }
    render(){
        return(this.state.MethB ? <div>Welcome Home</div>:<div>Welcome Guest</div>);
    }
}

export default NewlistB;