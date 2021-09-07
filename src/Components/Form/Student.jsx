import React from 'react';

class Student extends React.Component{
    constructor(props) {
      super(props);
      this.onChangePersonName = this.onChangePersonName.bind(this);
      this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
      this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        items: [],
        person_name: '',
        business_name: '',
        business_gst_number:'',
        updatePerson_name: '',
        updateBusiness_name: '',
        updateBusiness_gst_number:''
      }
    }
    onChangePersonName(e) {
      this.setState({
        person_name: e.target.value, updatePerson_name: e.target.value
      });
    }
    onChangeBusinessName(e) {
      this.setState({
        business_name: e.target.value, updateBusiness_name: e.target.value
      })  
    }
    onChangeGstNumber(e) {
      this.setState({
        business_gst_number: e.target.value, updateBusiness_gst_number: e.target.value
      })
    }
    delete(e) {
      this.state.items.splice(this.state.items.indexOf(e), 1);
      this.setState({ items: this.state.items });
    }
    update(e) {
      e.showHide = true;
      this.setState(e);
   
      const updateItem = {
        person_name: this.state.updatePerson_name ? this.state.updatePerson_name : e.Person_name,
        business_name: this.state.updateBusiness_name ? this.state.updateBusiness_name : e.Business_name,
        business_gst_number: this.state.updateBusiness_gst_number ? this.state.updateBusiness_gst_number : e.Business_gst_number,
        id: Date.now()
      };
      this.state.items.splice(this.state.items.indexOf(e), 1, updateItem);
      this.setState({ items: this.state.items });
    }

    onSubmit(e) {
      e.preventDefault();
      // console.log(`The values are ${this.state.person_name}, ${this.state.business_name}, and ${this.state.business_gst_number}`)
      // this.setState({
      //   person_name: '',
      //   business_name: '',
      //   business_gst_number: ''
      // })
      if (!this.state.person_name.length) {
        return;
      }
      const newItem = {
        person_name: this.state.person_name,
        business_name: this.state.business_name,
        business_gst_number: this.state.business_gst_number,
        id: Date.now()
      };
      this.state.items.unshift(newItem);
      this.setState({ items: this.state.items});
      this.setState({ person_name: ''});
      this.setState({ business_name: ''});
      this.setState({ business_gst_number: ''});
    }

      render(){
        let Element;

        if(this.state.items.length === 0){
            Element = ""
        }else{
          Element = <div>
                    <h3 align="center">Business List</h3>
              <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                  <tr>
                    <th>Person</th>
                    <th>Business</th>
                    <th>GST Number</th>
                    <th colSpan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.items.map((item, index) => (
                    <tr key={item.id + index}>
                      <td className={item.showHide ? "hidden" : ""}>{item.person_name} </td>
                      <td className={item.showHide ? "hidden" : ""}>{item.business_name} </td>
                      <td className={item.showHide ? "hidden" : ""}>{item.business_gst_number} </td>

                      <td >
                        <button
                          className={item.showHide ? "" : "btn btn-success"}
                          onClick={() => this.update(item)}
                        >
                          Update
                        </button>
                        {/* <button
                          className={item.showHide ? "btn" : "hidden"}
                          onClick={() => this.save(item)}
                        >
                        Save
                        </button> */}
                        <button
                          className="btn del-btn btn btn-danger m-2"
                          onClick={() => this.delete(item)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                    ))}
                </tbody>
              </table>
              <div className="p-2">
                <button className="btn btn-danger"  onClick={() => this.setState({ items: []})}>Delete All</button>
              </div>
          </div>
        }
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

export default Student;