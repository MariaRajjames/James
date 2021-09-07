import React, { Component } from 'react';

class NewlistA extends React.Component{
    constructor(){
        super();
        this.state = {
            MethA: false
        };
    }
    render(){
        let Element;

        if(this.state.MethA){
            Element = <div>Welcome Home</div>
        }else{
            Element = <div>Welcome Guest</div>
        }
        return(
            <div>
                {Element}
            </div>
        );
    }
}

export default NewlistA;