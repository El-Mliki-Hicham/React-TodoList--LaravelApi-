import React from "react";
import axios from "axios";

import withRouter from "./withRouter";


 class EditTask extends React.Component{
     state ={
     id: '',
     Task : '',
     Description: '',
     
      
    };
    changeHandler=(e) => {
      
            this.setState({ [e.target.id]: e.target.value})
     
        // console.log(this.state)
    }   
    async componentDidMount()  {
        let id =this.props.params.id
      
      
       await axios.get('http://127.0.0.1:8000/api/data/'+id)
  
       .then((res)=> {
        
           this.setState({
               
                Description: res.data[0].Description,
                Task: res.data[0].Task,
              
            })
            console.log(this.state)       
          })
        }
        
          
    handleUpdate =async () => {
       
        let id = this.props.params.id
        const { Task,Description } = this.state;
      await  axios.put('http://127.0.0.1:8000/api/update/'+id ,{
            Task:Task,
            Description:Description
        
        })  
          
        window.location.replace('/')
    
    }
    handleBack=()=>{
        window.location.replace('/')
    }
  
render() {
      
    const { Task,Description} = this.state;
   
    return(
     <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1>Edit Task</h1>
                    
                    <form  >
                        <div className="form-group">
                            <label htmlFor="Task">Task</label>
                            <input type="numbre" className="form-control"defaultValue={Task} id="Task" placeholder="Enter Number" onChange={this.changeHandler}></input>
                        </div>
                        <div className="form-group" onSubmit={()=>this.submitHandler}>
                            <label htmlFor="des">Description</label>
                            <input type="text" className="form-control" defaultValue={Description} id="Description" placeholder="Enter Name" onChange={this.changeHandler}></input>
                        </div>
                        
                        <input type="button" name="update" style={{marginTop:'20px',marginBottom:'20px'}} value='Update' className="btn btn-primary"   onClick={this.handleUpdate}></input>
                        <input type="button" name="return" style={{marginTop:'20px',marginBottom:'20px'}} value='return' className="btn btn-primary"   onClick={this.handleBack}></input>
                    </form>
                        
                </div>
            </div>
        </div>
    )
}
}
export default withRouter(EditTask);