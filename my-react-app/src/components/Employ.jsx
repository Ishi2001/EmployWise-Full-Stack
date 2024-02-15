import axios from 'axios';
import {useEffect, useState } from "react";
 
function Employ()
{
    const [Employid, setId] = useState('');
  const [employname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [reportto, setReportto] = useState("");
  const [employs, setUsers] = useState([]);


 
useEffect(() => {
  (async () => await Load())();
  }, []);
 
 
  async function  Load()
  {
     const result = await axios.get(
         "http://localhost:8081/api/v1/employ/getall");
         setUsers(result.data);
         console.log(result.data);
  }
  async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8081/api/v1/employ/save",
        {
        employname: employname,
        email: email,
        mobile:mobile,
          reportto: reportto
        });
          alert("Employ Registation Successfully");
          setId("");
          setName("");
          setEmail("");
          setMobile("");
          setReportto("");
          Load();
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
   async function editEmploy(Employs)
   {
    setName(Employs.employname);
    setEmail(Employs.email);
    setMobile(Employs.mobile);
    setReportto(Employs.reportto); 
    setId(Employs._id);
   }
 
   async function DeleteEmploy(Employid)
   {
        await axios.delete("http://localhost:8081/api/v1/employ/delete/" + Employid); 
        alert("Employ deleted Successfully");
        Load();
   }
 
   
    async function update(event)
   {
    event.preventDefault();
 
   try
       {
        await axios.put("http://localhost:8081/api/v1/employ/edit/" + Employid ,
       {

        employname: employname,
        email: email,
        mobile:mobile,
         reportto: reportto
       
       });
         alert("Registation Updateddddd");
         setId("");
         setName("");
         setEmail("");
         setReportto("");
         Load();
       }
   catch(err)
   {
    alert("Employ Updateddd Failed");
  }
}
   

 


return (
    <div>
       <h1>Employ Details</h1>
       <div class="container mt-4" >
          <form>
             
              <div class="form-group">
                <label>Employ Name</label>
                <input  type="text" class="form-control" id="employname"
                value={employname}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>
              <div class="form-group">
                <label>Employ Email</label>
                <input  type="text" class="form-control" id="email" 
                 value={email}
                  onChange={(event) =>
                    {
                      setEmail(event.target.value);      
                    }}
                />
              </div>
              <div class="form-group">
                <label>Employ Mobile</label>
                <input  type="text" class="form-control" id="mobile" 
                 value={mobile}
                  onChange={(event) =>
                    {
                      setMobile(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Reportto</label>
                <input type="text" class="form-control" id="reportto" 
                  value={reportto}
                onChange={(event) =>
                  {
                    setReportto(event.target.value);      
                  }}
                />


              </div>
              <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Register</button>

              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>   
            </form>
          </div>
                <br/>
<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Employ Name</th>
      <th scope="col">Employ Email</th>
      <th scope="col">Employ Mobile</th>
      <th scope="col">Employ Reportto</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       {employs.map(function fn(employ)
       {
        console.log(employ.employname);
            return(
              
                <tbody key={employ._id}>
                <tr>
                <td>{employ.employname}</td>
                <td>{employ.email}</td>
                <td>{employ.mobile}</td>
                <td>{employ.reportto}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editEmploy(employ)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteEmploy(employ._id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            
            })}
            </table>
       </div>
            );
        }
    
  export default Employ;