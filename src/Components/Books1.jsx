import React from 'react';

class Books1 extends React.Component {
    render(props) {
        const {image, title, text, price} = this.props;
      return (
        <div className = "container-fluid">
            <div className = "row">
                <div className="col-3 p-5">
                    <img src={image}></img>
                </div>
                <div className = "col-9 p-5">
                    <h5>{title}</h5>
                    <p>{text}</p>
                    <h2>{price}</h2>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Books1;