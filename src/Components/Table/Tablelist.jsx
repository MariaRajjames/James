import React from 'react';

class Tablelist extends React.Component{
   render(){
       const {id,title,year,runtime,actors} = this.props;
       return(
           <div className="container-fluid">
               <div className="row">
                    <table class="table text-align">     
                        <tbody>
                            <tr>
                                    <td className="col-2">{title}</td>
                                    <td className="col-2">{year}</td>
                                    <td className="col-3">{runtime}</td>
                                    <td className="col-3">{actors}</td>
                                    <td><button className="btn btn-danger col-4" onClick={() =>this.props.onDelete(id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
               </div>
           </div>
       );
   }

}

export default Tablelist;