import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function AddUser({users,setUsers}) {

  let[name,setName]=useState("")
  let[email,setEmail]=useState("")
  let[address,setAddress]=useState("")
  let[mobile,setMobile]=useState("")
  let[batch,setBatch]=useState("")
  let[teacher,setTeacher]=useState("")
  let navigate=useNavigate()

  let handleSave = ()=>{
  let newArray = [...users]
newArray.push({
    name,
    email,
    address,
    mobile,
    teacher,
    batch
  })
  setUsers(newArray)
  navigate('/dashboard')
  
}

  return <div className="container">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">create User</h1>
                        </div>
  <Form>
    <Form.Group className="mb-3">
      <Form.Label>name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>email</Form.Label>
      <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>address</Form.Label>
      <Form.Control type="text" placeholder="Enter address" onChange={(e)=>setAddress(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>mobile</Form.Label>
      <Form.Control type="text" placeholder="Enter mobile" onChange={(e)=>setMobile(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>teacher</Form.Label>
      <Form.Control type="text" placeholder="Enter teachername" onChange={(e)=>setTeacher(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>batch</Form.Label>
      <Form.Control type="text" placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
    </Form.Group>

    <Button varient="primary" onClick={()=>handleSave()}>
      Submit
    </Button>
  </Form>
  </div>
}

export default AddUser