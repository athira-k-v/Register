import React from 'react'
// import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'

import { Link } from 'react-router-dom';
function Home() {


    
  return (
  <div>

<Header></Header>

        <Row className='text-center p-5 bg
        ' >
            <Col lg={6}>

                <h1 style={{fontFamily:"cursive",fontSize:'50px'}}><b>EDUCATION</b></h1>
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora totam rem consequuntur accusamus quidem voluptas perferendis sapiente earum incidunt tempore deleniti temporibus itaque molestiae hic placeat quaerat, maxime autem.</p>
<br /><br />
                <a href="" style={{textDecoration:"none"}}>New Student</a>
                click here
               <Link to={'/register'}> <button  className='btn btn-light'> REGISTER</button></Link>
            </Col>
            <Col lg={4}>
                <img src="https://i.postimg.cc/RFjMpbZX/pngtree-online-education-training-course-design-concept-vector-illustration-png-image-2158408-remove.png" alt="" />
            </Col>
        </Row>

        
    </div>

  )
}

export default Home