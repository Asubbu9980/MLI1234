import React, { useEffect } from 'react'
import { useState } from 'react'
import Table from 'react-bootstrap/Table';

const Patients = () => {
    const [data,setData]=useState([])
    const [data1,setData1]=useState([])
    const [search,setSearch]=useState("")
    useEffect(()=>{
   getinfo()
    },[])

    function getinfo(){
        fetch("http://localhost:3006/patients")
  .then(res=>res.json())
  .then((info)=>{
    setData(info)
    setData1(info)
  })
  .catch(error=>console.log(error))

    }

    function find(e){
        const c=(e.target.value)
        const b=data1.filter((val)=>{
            if(val.name.toLowerCase().includes(c.toLowerCase())){
                return val
            }
        })
        setData(b)
    }
    function down(){
        const result1=data.sort((a,b)=>a.date.localeCompare(b.date))
        setData([...result1])
        
    }
  return (
    <div>
        <nav className="navbar navbar-light bg-dark">
  
  <h1 className='make'>Apollo Hospitals <sub className='subtext'>Life is valuable...</sub></h1>
  <a href="/" style={{color:"white"}} className='anchor'>Go back</a>
</nav>
        <center>
            <h1>Registered patients details</h1>
            <input type="text" placeholder="search by name" onChange={find} className='m-3'/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Doctor</th>
                    <th>Purpose</th>
                    <th>Date <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16" onClick={down}>
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg></th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {data.map((val,index)=>{
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.doctor}</td>
                            <td>{val.purpose}</td>
                            <td>{val.date}</td>
                            <td>{val.time}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>

        </center>
        
    </div>
  )
}

export default Patients