import React from 'react'
import Table from 'react-bootstrap/Table';

function TableView({users}) {
  return (
    <div>


<Table striped bordered hover>
     
      <tbody className='justify-content-center'>
        <tr>
          
          <td>{users?.firstname}</td>
          <td>{users?.lastname}</td>
          <td>{users?.address}</td>
          <td>{users?.email}</td>
          <td>{users?.email}</td>
          <td>{users?.gendet}</td>
          <td>{users?.phonenumber}</td>
          <td>{users?.course}</td>
         
        </tr>
        
      </tbody>
    </Table>



    </div>
  )
}

export default TableView