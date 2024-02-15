# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh










{/* <div className='r1 text-center w-100' >
  <div className='text-center  container w-100 '>
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
         <Button onClick={handleRegister} className='text-black'>Register</Button>
         <Button className='ms-4 text-dark'>Cancel</Button>
              </div>
         
         
              </Form>

            
           </div>
           <ToastContainer autoClose={3000} theme='colored'/> 
          </div>
</div> */}