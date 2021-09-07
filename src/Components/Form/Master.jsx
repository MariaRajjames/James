import React from 'react';

class Master extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            account: [
                // username:"", business:"", empid:""
            ]
        }
    }
    render(){
        return(
            <div className="container" style={{marginTop: 10}}>
              <h3>Add New Business</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group m-2">
                      <label>Person Name:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.person_name}
                        onChange={this.onChangePersonName}
                        />
                  </div>
                  <div className="form-group m-2">
                      <label>Business Name: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.business_name}
                        onChange={this.onChangeBusinessName}
                        />
                  </div>
                  <div className="form-group m-2">
                      <label>GST Number: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.business_gst_number}
                        onChange={this.onChangeGstNumber}
                        />
                  </div>
                  <div className="form-group m-2">
                      <input type="submit" value="Register Business" className="btn btn-primary"/>
                  </div>
              </form>
              <div>{Element}</div>
          </div>
        );
    }
}

export default Master;