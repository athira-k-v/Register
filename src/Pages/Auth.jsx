import React, { useState } from 'react'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { registerAPI } from '../services/allAPI';
import { Button, Form } from 'react-bootstrap';

function Auth() {

  // const navigate=useNavigate()
  const [userInputData, setUserInputData] = useState({
    firstname:"",lastname:"",email:"",password:"",address:"",gender:"",phonenumber:"",course  :""

  })

  const navigate=useNavigate()
  




const handleRegister=async(e)=>{
  e.preventDefault()
     console.log(userInputData);
  const {firstname,lastname,email,password,address,gender,phonenumber,dateofbirth,course}=userInputData
  if(!firstname||!lastname||!address||!email||!gender||!phonenumber||!password||!dateofbirth||!course){
    toast.info("Please fill the form completely")
  }else{
    //toast.success("proceed to register api")
   try{
 const result=await registerAPI(userInputData)
 console.log(result);
 if(result.status===200){
  toast.success(`Welcome ${result.data.firstname}...`)
  setUserInputData({ firstname:"",lastname:"",address:"",email:"",gender:"",phonenumber:"",password:"",dateofbirth:"",course:""})
  // navigate to login
  setTimeout(()=>{
    navigate("/view")
  },2000)
 }else{
  toast.error(result.response.data)
 }
   }catch(err){
    console.log(err);
   }
  }

}
  return (


<div className='r1 text-center  bg ' >
  <div className='text-center container box '>
   <h1 className='fw-bolder text-dark pp'>
             Apply as a Student
            </h1> 
           <div className="row">
           <Form className='d-flex justify-content-between mt-5 input-box'>
              <div className="col-lg-6">
           
            
            
              <Form.Group className="mb-3 ms-4  input-box" controlId="formBasicName">
           
           <Form.Control type="text" placeholder="First Name" value={userInputData.firstname} onChange={e=>setUserInputData({...userInputData,firstname:e.target.value})} required/>
         </Form.Group>
  
         <Form.Group className="mb-3 ms-4 input-box" controlId="formLastName">
          
           <Form.Control type="text" placeholder="Last Name" value={userInputData.lastname} onChange={e=>setUserInputData({...userInputData,lastname:e.target.value})} required/>
         </Form.Group>
         <Form.Group className="mb-3 ms-4 input-box" controlId="formAddress">
          
           <Form.Control type="text"   placeholder="Address" value={userInputData.address} onChange={e=>setUserInputData({...userInputData,address:e.target.value})} required/>
         </Form.Group>
             
       <Form.Group className="mb-3 ms-4 input-box" controlId="formBasicEmail">
       
         <Form.Control type="email" placeholder="Enter email" value={userInputData.email} onChange={e=>setUserInputData({...userInputData,email:e.target.value})} required />
         
       </Form.Group>
       
  
       <Form.Group className="mb-3 ms-4 input-box" controlId="formGender">
              
                <Form.Select aria-label="Select Gender" value={userInputData.gender} onChange={e=>setUserInputData({...userInputData,gender:e.target.value})} required>
                  <option>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                
                </Form.Select>
              </Form.Group>
              </div>
  
  
              <div className="col-lg-6">
     
              <Form.Group className="mb-3 ms-4 input-box" controlId="formmobile">
           
           <Form.Control type="tel" placeholder="Mobile" value={userInputData.mobile} onChange={e=>setUserInputData({...userInputData,phonenumber:e.target.value})} required/>
         </Form.Group>
      
        <Form.Group className="mb-3 ms-4 input-box" controlId="formBasicPaswd">
  
          <Form.Control type="password" placeholder="Enter Password" value={userInputData.password} onChange={e=>setUserInputData({...userInputData,password:e.target.value})} required />
        </Form.Group>
        <Form.Group className="mb-3 ms-4 input-box" controlId="formdate">
           
           <Form.Control type="date" placeholder="Date of Birth" value={userInputData.dateofbirth} onChange={e=>setUserInputData({...userInputData,dateofbirth:e.target.value})} required/>
         </Form.Group>
       
         <Form.Group className="mb-3 ms-4 input-box" controlId="formCourse">
              
              <Form.Select aria-label="Select the Course" value={userInputData.course} onChange={e=>setUserInputData({...userInputData,course:e.target.value})} required>
              <option>Select Course</option>
                <option value="Biology">Biology</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Humanities">Humanities</option>
              
              </Form.Select>
            </Form.Group>

           <Button onClick={handleRegister}  className='text-black'>Register</Button>
  
      <Button className='ms-4 text-dark'>Cancel</Button>
              </div>
         
         
              </Form>

            
           </div>

           <div><></>
<Link to={'/'}>
            <button className='btn btn-warning'>BACK HOME</button>
  
</Link>   


 
     </div>
           <ToastContainer autoClose={3000} theme='colored'/> 
          </div>
</div>
    
  )
}


export default Auth