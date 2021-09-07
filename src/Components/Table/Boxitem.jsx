import React from 'react';


class Boxitem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            disabled: true
        }
    }

    render(){
        const {id,value,max} = this.props;
        const {clickIncrement, clickDelete, clickDecrement} = this.props;

        let Element;
        if(value == 0){
            Element = <div>Zero</div>
        }else{
            Element = <div>{value}</div>
        }
        return(
            <div className="container text-center">
                <button className="btn btn-success m-3">{Element}</button>
                <button className="btn btn-primary m-3"  onClick={() =>clickIncrement(id)}>+</button>
                <button className="btn btn-warning m-3" disabled={value == 0 ? "disabled":""} onClick={() =>clickDecrement(id)}>-</button>
                <button className="btn btn-danger m-3" onClick={() =>clickDelete(id)}>Delete</button>
            </div>
        );
    }
}

export default Boxitem;