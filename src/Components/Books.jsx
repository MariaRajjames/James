import React from 'react';

function Books(props){
    return(
        <div className = "container-fluid">
            <div className = "row">
                <div className="col-3 p-5">
                    <img src={props.image}></img>
                </div>
                <div className = "col-9 p-5">
                    <h5>{props.title}</h5>
                    <p>{props.text}</p>
                    <h2>{props.price}</h2>
                    <button className="btn btn-primary m-1">Sumit</button><button className="btn btn-danger m-1">Delete</button>
                </div>
            </div>
        </div>
    );
    
    }
  

export default Books;