import React from "react";
import axios from "axios";



 class AddTask extends React.Component{

    state = {
        
        Task : '',
        Description: '',
        
    };

    //stock value in state
changeHandler=(e) => {
    this.setState({ [e.target.id]: e.target.value})
    console.log(this.state)
}   

// send data to api json-server
submitHandler = async(e) => {
    e.preventDefault() 
    await axios.post('http://127.0.0.1:8000/api/add', this.state)
    .then((res)=> alert("add success"));
    window.location.reload(false); 
   
//  setTimeout(function(){
//     window.location.reload();
//  }, 500);
}

render() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1>Add Task</h1>

                    <form  onSubmit={this.submitHandler}>
                       
                        <div className="form-group">
                            <label htmlFor="Name">Full Name</label>
                            <input type="text" className="form-control"  onChange={this.changeHandler} id="Task" placeholder="Enter Name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone">Phone number</label>
                            <input type="text" className="form-control" id="Description"  onChange={this.changeHandler}  placeholder="Enter Number"></input>
                        </div>
                        
                        <button type="submit" style={{marginTop:'20px',marginBottom:'20px'}} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
}
export default AddTask