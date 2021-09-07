import React from 'react';

class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {id:1, name:"Logan", position:"UI Developer"};
                    
    }

    changePosition = () => {
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <h1>My ID is {this.state.id}</h1>
                <h1>My Name is {this.state.name}</h1>
                <h1>My Position is {this.state.position}</h1>
                
                <button onClick={this.changePosition}>Delete</button>
            </div> 
            
        );
        
    }
}

export default Demo;