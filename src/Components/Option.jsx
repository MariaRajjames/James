import React from 'react';

class Option extends React.Component {
    render(props) {
        const {image, title, text} = this.props;
    return(
        <div className="container">
            <div className="row">
                <div className="col-4 p-2">
                    <img src={image} />
                </div>
                <div className="col-8 p-5">
                    <h1>{title}</h1> 
                    <p>{text}</p>

                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>  
        </div>
    );
}
}
export default Option;