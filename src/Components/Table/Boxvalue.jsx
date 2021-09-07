import React from 'react';

class Boxvalue extends React.Component{

    render(){
        return(
            <div className="d-flex">
                <p className="col-2 shadow p-3 m-1 bg-white rounded">{this.state.count}</p>
                <button className="col-2 btn btn-primary m-1" onClick={this.countIncrement}>Increment</button>
                <button className="col-2 btn btn-primary m-1" onClick={this.countDecrement}>Decrement</button>
                <button className="col-2 btn btn-danger m-1" onClick={this.countDelete}>Delete</button>
            </div>
        );
    }
}

export default Boxvalue;