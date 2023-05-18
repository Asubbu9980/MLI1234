import React, { useState } from 'react'
import "../Styles/Styling.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import "bootstrap/dist/css/bootstrap.min.css";









const Register = () => {
  const [show1,setShow1]=useState(false)
  const [show2,setShow2]=useState(false)
  const [show3,setShow3]=useState(false)
  const [show4,setShow4]=useState(false)
  const [show5,setShow5]=useState(false)
  const [show6,setShow6]=useState(false)
    
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [doctor,setDoctor]=useState("")
    const [purpose,setPurpose]=useState("")
    const [date,setDate]=useState("")
    const [time,setTime]=useState("")
    const [show,setShow]=useState(false)

    function handlesubmit(event){
        const details={name,age,doctor,purpose,date,time}
   event.preventDefault()
   if(name.length ==0 && age.length ==0 && doctor.length==0 && purpose.length==0 && date.length ==0 && time.length ==0){
    setShow1(true)
    setShow2(true)
    setShow3(true)
    setShow4(true)
    setShow5(true)
    setShow6(true)
   } else if(name.length==0){
    setShow1(true)
   } else if(age.length==0){
    setShow2(true)
   } else if(doctor.length==0){
    setShow3(true)
   } else if(purpose.length==0){
    setShow4(true)
   } else if(date.length==0){
    setShow5(true)
   } else if(time.length==0){
    setShow6(true)
   } else{
    fetch("http://localhost:3006/patients",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(details)
   }).then(res=>res.json())
     .then(res=>console.log(res))
     .catch(error=>console.log(error))
    
    setName("")
    setAge("")
    setDoctor("")
    setPurpose('')
    setDate("")
    setTime("")
    setShow(true)
   }
    
}
function one(e){
  setName(e.target.value)
  setShow1(false)
}
function two(e){
  setAge(e.target.value)
  setShow2(false)
}
function three(e){
  setDoctor(e.target.value)
  setShow3(false)
}
function four(e){
  setPurpose(e.target.value)
  setShow4(false)
}
function five(e){
  setDate(e.target.value)
  setShow5(false)
}
function six(e){
  setTime(e.target.value)
  setShow6(false)
}

  return (
    <>
       

<div className='back'>
<nav className="navbar navbar-light bg-dark nav">
  <img src="https://thumbs.dreamstime.com/b/hospital-logo-icon-hospital-logo-icon-135146804.jpg" className='image'/> 
  
  <h1 className='make'>Apollo Hospitals <sub className='subtext'>Life is valuable...</sub></h1>
  
   

</nav>

<h1 className='heading'>Book your Appointment</h1>




    <div className='container'>
        <div className='row'>
            <div className='col-12 col-md-6'>
            <div class="card">
        <h1>Do you Know?</h1>
        <p>Apollo hospital is ranked 2 <sup>nd</sup> world wide for it's massive treatment in Dermatologist,Cancer and Brain stroke </p>
      <p>Doctors available:</p>
      <ul>
        <li>Dr subbarao(Dermatologist)</li>
        <li>Dr meghana(homeopathy)</li>
        <li>Dr srinath(dental)</li>
        <li>Dr Manoj(Hairfall)</li>
        <li>Dr Rajesh(Cardio)</li>
      </ul>
    </div>
                
            </div>
            <div className='col-12 col-md-6'>
              <div className='form1'>
              
              
           
            <Form onSubmit={handlesubmit}>
      <Form.Group className="mb-1">
        <Form.Label className='label'>Name</Form.Label>
        <Form.Control className='w-75' type="text" placeholder="Enter your name" value={name} onChange={one} />
        {show1?<p style={{color:"red"}}>*Required</p>:null}
        
      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Label>Age</Form.Label>
        <Form.Control  className='w-75' type="number" placeholder="enter your age" value={age} onChange={two} />
        {show2?<p style={{color:"red"}}>*Required</p>:null}

      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Label>Doctor</Form.Label>
        <Form.Control  className='w-75' type="text" placeholder="enter doctor name" value={doctor} onChange={three}/>
        {show3?<p style={{color:"red"}}>*Required</p>:null}

      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Label>Purpose</Form.Label>
        <Form.Control  className='w-75' type="text" placeholder="enter your problem" value={purpose} onChange={four} />
        {show4?<p style={{color:"red"}}>*Required</p>:null}

      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Label>Date</Form.Label>
        <Form.Control  className='w-75' type="date" placeholder="enter your date" value={date} onChange={five}/>
        {show5?<p style={{color:"red"}}>*Required</p>:null}

      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Label>Time</Form.Label>
        <Form.Control  className='w-75' type="time" placeholder="enter your time" value={time} onChange={six} />
        {show6?<p style={{color:"red"}}>*Required</p>:null}

      </Form.Group>

     
      
      <Button variant="primary" type="submit" className='w-75 mt-3 mb-2'>
        Register
      </Button>
    </Form>
    {show?<p>Registered succesfully <a href="/patients">clickhere</a></p>:null}
    </div>
    
    
    


            </div>
        </div>
    </div>

    <footer className='bg-dark'>
  <div className='footer'>
  <p className='content'>Himayath nager,R-no 11-2,Sangareddy District</p>

  </div>
  <div className='footer1'>
  
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16" style={{color:"white"}}>
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
<p style={{color:"white"}}>+91-795824178</p>
</div>

</footer>

</div>





    </>
  )
}

export default Register