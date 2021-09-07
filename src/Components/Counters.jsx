import React from 'react';
import Counter from './Counter';

class Counters extends React.Component{
    constructor(props){
        super(props);
        this.state = [
            {id:0, value:0},
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
        ];
    }

    deleteButton = () =>{
        console.log(this.state);
    }

    render(){
        return(
            <div>
                {this.state.map(() =><Counter key={counter.id} value={counter.value} />)}
            </div>
        );
    }
}

export default Counters;