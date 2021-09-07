import React from 'react';

const Numbers =(props)=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-4 p-2">
                    <img src={props.src} />
                </div>
                <div className="col-8 p-5">
                    <h1>{props.title}</h1> 
                    <p>{props.text}</p>

                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>  
        </div>
    );
}

export default Numbers;