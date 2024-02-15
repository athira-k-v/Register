import React, { useEffect, useState } from 'react'
import { getStudentDetailsAPI } from '../services/allAPI';
import { Table } from 'react-bootstrap';
import TableView from '../Components/TableView';



function View({users}) {

const [allDetails,setAllDetails]=useState([])


const getStudentDetails = async () => {
    try {
      const result = await getStudentDetailsAPI()
      if (result.status === 200) {
        setAllDetails(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  console.log(allDetails);

  useEffect(() => {
    getStudentDetails()
   
  }, [])



  return (
    <div style={{backgroundColor:"bisque"}} >
<div className='text-center  ' style={{fontSize:"50px"}}>
 <b> Student Details</b>
</div>
<Table >


<thead>
        <tr>
          
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Phone Number</th>
          <th>Date Of Birth</th>
          <th>Course</th>
        </tr>
      </thead>



      
     
      {allDetails.length>0 && allDetails.map((users,index)=>(
        <tbody key={index} className='justify-content-center'>
        <tr users={users}>
          
          <td>{users?.firstname}</td>
          <td>{users?.lastname}</td>
          <td>{users?.address}</td>
          <td>{users?.email}</td>
          <td>{users?.email}</td>
          <td>{users?.phonenumber}</td>
          <td>{users?.gender}</td>
          <td>{users?.course}</td>
         
        </tr>
        
      </tbody>  ))}
    

</Table>
        
        {/* {allDetails.length>0 && allDetails.map((users,index)=>(
              <div key={index} className=" me-5 ">
                <TableView users={users} />
              </div>
            
            )) */}
{/* } */}

{/* <TableView></TableView> */}

    </div>
  )
}

export default View