import React from 'react';

const count = 0;

class Click extends React.Component{
    constructor(props){
        super(props);
        this.state = {info: true};
    }

    countIncrease = () =>{
        this.setState({info: false});

        let Element;

        if(){
            Element = <div>True</div>
        }else{
            Element = <div>false</div>
        }
        return(
            <div>
                {Element}
            </div>
        );
    }


    render(){
        return(
            <div>
                <h1>Click Count</h1>
                <button type="button" onClick = {this.countIncrease}>Click</button>  
                <h5>{this.state.info}</h5>
                
                
            </div>
        );
    }
}

export default Click;