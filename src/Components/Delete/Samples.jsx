
import { render } from '@testing-library/react';
import React from 'react';

const Samples =(props) => {

        console.log(props);
        const {image,title,text} = props;

        return(
            <div className="container m-3">
                <div className="row m-3">
                    <div className="col-5">
                        <img src={image} width="200px;" height="250px;" alt="" />
                    </div>
                    <div className="col-7">
                        
                        <h1>{title}</h1>
                        <p>{text}</p>

                
                        <button className="btn btn-primary m-3">Buy Now</button>
                        <button className="btn btn-danger m-3" onClick={() =>props.onDelete(props.id)}>Delete</button>
                    </div>
                </div>
            </div>
        );
        
}



export default Samples; 