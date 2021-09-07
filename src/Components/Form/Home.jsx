import React from 'react';

var Element;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
      updateText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateChange = this.updateChange.bind(this);
  }

  render() {
    var Element;
    if( this.onRefresh === 0){
      Element = <div></div>
    }else{
      Element = <div>
        <h3 className="border p-4 text-center">Render Data</h3>

      <table className="crud-table border col-md-12">
        <thead>
          <tr>
            <th>Name</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {this.state.items.map((item, index) => (
            <tr key={item.id + index}>
              <td className={item.showHide ? "hidden" : ""}> <h2>{item.text}</h2> </td>
              {/* <td className={item.showHide ? "" : "hidden"}>
                <input
                  type="text"
                  onChange={this.updateChange}
                  defaultValue={item.text}
                />
              </td> */}
              <td >
                <button
                  className={item.showHide ? "hidden" : "btn save-btn btn btn-success m-2"}
                  onClick={() => this.update(item)}
                >
                  Update
                </button>
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
    return (
      <div className="container col-md-6">
        <h1 className="border p-4 text-center">Crud Form</h1>

        <form onSubmit={this.handleSubmit} className="border p-4 d-flex justify-content-between">
          <h4>Name</h4>
          <input
            type="text"
            placeholder="Enter Name"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary save-btn" onSubmit={this.onRefresh}>
            Send
          </button>
         
        </form>
        <div>{Element}</div>
      </div>
    );
  }
 
  
  delete(e) {
    this.state.items.splice(this.state.items.indexOf(e), 1);
    this.setState({ items: this.state.items });
  }
  // updateChange(e) {
  //   this.setState({ updateText: e.target.value});
  // }
  update(e) {
    e.showHide = true;
    this.setState(e);
 
    const updateItem = {
      text: this.state.updateText ? this.state.updateText : e.text,
       id: Date.now()
    };
    this.state.items.splice(this.state.items.indexOf(e), 1, updateItem);
    this.setState({ items: this.state.items });
  }
  handleChange(e) {
    this.setState({ text: e.target.value, updateText: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.state.items.unshift(newItem);
    this.setState({ items: this.state.items});
    this.setState({ text: ""});
   // this.setState({ items: []});
  }
}

export default Home;