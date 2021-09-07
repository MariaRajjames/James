import React, { Component } from 'react';

class NewlistC extends React.Component{
    constructor(){
        super();
        this.state = {
            MethC: true
        };
    }
    render(){
        return(this.state.MethC && <div>Welcome Home</div>);
    }
}

export default NewlistC;