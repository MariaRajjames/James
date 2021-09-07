
import { render } from '@testing-library/react';
import React from 'react';

function Counter(props){
        return(
            <div className="container">
                <div className="row">
                    <h1 className="col-2"></h1>
                    <div className="col-5">
                        <button className="btn btn-primary">Enter</button>
                    </div>
                    <div className="col-5">
                        <button onClick={this.deleteButton} className="btn btn-danger">Delete</button>
                    </div>
                </div>

            </div>
        );
}

export default Counter;