import React from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';



class ListTask extends React.Component {
  
  state = {
    Task: []
   
  }  
  
  //get data from api json-server
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/data")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          Task : result
        })
      },
      )
    }
    
    //delete function
    handleDelete= async(id)=>{
  await axios.delete('http://127.0.0.1:8000/api/delete/'+id)
  .then((res)=> alert("deleted success"));
  window.location.reload(false);
   
}
// render update




//edit function 
// handleEdit = async(id)=>{
//   await axios.get('http://localhost:4000/user/'+id)
  
//   .then((res)=>{
   
//       console.log(res.data)
      
//     })
    
    // alert(res.data.Name));
// }
    
//   





render(){
    return(
    

    
   
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        {this.state.Task.map(task => (
        <tbody key={task.id}>
          <tr>
            <td>{task.id}</td>
            <td>{task.Task}</td>
            <td>{task.Description}</td>
          
            <td width="30%">
              <center><a href={'/edit/'+task.id}> <button style={{marginRight:"10px"}} className="btn btn-info">Edit</button></a>
            <button className="btn btn-danger"   onClick={()=>this.handleDelete(task.id)}>Delete</button>
            </center>
            </td>
            
          </tr>
          
        </tbody>
        ))}
      </Table>
 

)
}
}
export default ListTask