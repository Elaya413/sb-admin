import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
function EditUser({users,setUsers}) {
 let params=useParams()
let[name,setName]=useState(users[params.id].name)
  let[email,setEmail]=useState(users[params.id].email)
  let[address,setAddress]=useState(users[params.id].address)
  let[mobile,setMobile]=useState(users[params.id].mobile)
  let[teacher,setTeacher]=useState(users[params.id].teacher)
  let[batch,setBatch]=useState(users[params.id].batch)

  let navigate=useNavigate()

  let handleSave=()=>{
  let newArray=[...users]
  newArray.splice(params.id,1,{ name,email,address, mobile,teacher, batch})
setUsers(newArray)
  navigate('/dashboard')
}

  return <div className="container">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
                        </div>
  <Form>
    <Form.Group className="mb-3">
      <Form.Label>name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>email</Form.Label>
      <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>address</Form.Label>
      <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>mobile</Form.Label>
      <Form.Control type="text" placeholder="Enter mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>teacher</Form.Label>
      <Form.Control type="text" placeholder="Enter teachername" value={teacher} onChange={(e)=>setTeacher(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>batch</Form.Label>
      <Form.Control type="text" placeholder="Enter Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
    </Form.Group>

    <Button varient="primary"onClick={()=>handleSave()}>
      Submit
    </Button>
  </Form>
  </div>
}

export default EditUser