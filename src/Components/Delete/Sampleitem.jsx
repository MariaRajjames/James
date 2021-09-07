import React from 'react';
import Samples from './Samples';

class Sampleitem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            totals : [{id:1, title: "Postgraduate Pathology", text: "Every attempt has been made to present information in a simplified text augmented with the use of colored images and illustrations, tables, text boxes, and flowcharts. There was a tremendous increase in the understanding of molecular pathology and same is highlighted in all the relevant chapters.", src:"https://images-na.ssl-images-amazon.com/images/I/51FZ9jrRcKS._SX359_BO1,204,203,200_.jpg"},
                    {id:2, title: "Postgraduate Pathology", text: "Every attempt has been made to present information in a simplified text augmented with the use of colored images and illustrations, tables, text boxes, and flowcharts. There was a tremendous increase in the understanding of molecular pathology and same is highlighted in all the relevant chapters.", src: "https://images-eu.ssl-images-amazon.com/images/I/515nR4Nk4SL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"}]
           
                };
            
    }

    handleClick = totalID => {
        const totals = this.state.totals.filter(total => total.id !== totalID);
        this.setState({totals: totals});
        
    }

    render(){
        return(
            <div>
                {this.state.totals.map(total=><Samples key={total.id} id={total.id} title={total.title} text={total.text} image={total.src} onDelete={this.handleClick} />)}
            </div>
        );
    }
}


export default Sampleitem; 