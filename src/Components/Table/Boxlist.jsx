import React from 'react';
import { NavItem } from 'react-bootstrap';
import Boxitem from './Boxitem';


class Boxlist extends React.Component{
constructor(props){
    super(props);
    this.state = { 
        datas: [{id:1, value:0}, 
        {id:2, value:0}, 
        {id:3, value:0}]};
    }

    onIncrement = data =>{
        const datas = [...this.state.datas];
        const index = datas.indexOf(data);
        datas[index] = {...data};
        datas[data-1].value++;
        this.setState({data});
    }

        onDecrement = data =>{
        const datas = [...this.state.datas];
        const index = datas.indexOf(data);
        datas[index] = {...data};
        datas[data-1].value--;
        this.setState({data});
    }

     handleClick = dataID => {
        const datas = this.state.datas.filter(data => data.id !== dataID);
        this.setState({datas: datas});
    }

    handleRefresh = data =>{
        this.state.datas.map((data) =>{ 
            data.value = 0;
            return data;
        });
         this.setState({data});
    }

    render(){
        return(
            <div className="container">  
                <div className="text-center p-4 border"><h1>Counter App</h1></div>
                <button className="btn btn-secondary m-1" onClick={this.handleRefresh}>Reset</button>
                <button className="btn btn-warning m-1">Navbar: {this.state.datas.filter(data=>data.value > 0).length }</button>
                {this.state.datas.map((data) =><Boxitem key={data.id} id={data.id} value={data.value} max={data.max} clickDelete={this.handleClick} clickIncrement={this.onIncrement} clickDecrement={this.onDecrement} />)}
            </div>
        );
    }
} 

/*let count = 1;

class Mycount extends React.Component{
    constructor(){
        super();
        this.state = {count : 0}
    }

    countIncrease = () =>{
        this.setState({count : count++})
    }

    render(){
        return(
            <div>
                <button onClick={this.countIncrease}>Enter</button>
            </div>
        );
    }
} 
<Mycount />

*/

export default Boxlist;