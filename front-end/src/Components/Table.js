import React from "react";
import axios from "axios";




class Table extends React.Component {
  
  state = {
    user: [],
    isEdit:false
  }  
  
  //get data from api json-server
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/data")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          user : result
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
    

    <table   className="table" style={{width:'800px'}} >
    <thead>
        <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Description</th> 
        </tr>
        </thead>
        {this.state.user.map(user => (
        <tbody key={user.id}>
            <tr>
            <td>{user.id}</td>
            <td>{user.Task}</td>
            <td>{user.Description}</td>
              <td colSpan={1}>

            <a href={'/edit/'+user.id}> <button style={{marginRight:"10px"}} className="btn btn-info">Edit</button></a>
            <button className="btn btn-danger"   onClick={()=>this.handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
            </tbody>
            ))}
       </table>
 

)
}
}
export default Table