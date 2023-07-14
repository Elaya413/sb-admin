import React from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';

function Dashboard({users,setUsers}) {
    let navigate=useNavigate()
    let data=[
        {
            title:"Earning (Monthly)",
            Value:"$40,000",
            icon:"fa-calendar ",
            color:"primary",
            isProgress:false
        },
        {
            title:"Annual",
            Value:"$215,000",
            icon:" fa-dollar-sign ",
            color:"success",
            isProgress:false
        },
        {
            title:"Task",
            Value:"50%",
            icon:"fa-clipboard-list",
            color:"info ",
            isProgress:true
        },
        {
            title:"Pending Requests",
            Value:"18",
            icon:" fa-comments",
            color:"warning",
            isProgress:false
        }
    ]
    
    let handleDelete=(i)=>{
        let newUsers=[...users]
        newUsers.splice(i,1)
        setUsers(newUsers)
    }
  return<>
  <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                       
                  </div>

                     <div className="row">
                        {
                            data.map((e,i)=>{
                                return<Card key={i}
                                title={e.title}
                                value={e.Value}
                                icon={e.icon}
                                color={e.color}
                                isProgress={e.isProgress}
                                />
                            })
                        }

                      </div>
              </div>
              <div className="container-fluid">
              <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>email</th>
          <th>address</th>
          <th>mobile</th>
          <th>batch</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            users.map((e,i)=>{
                return<tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.address}</td>
                    <td>{e.mobile}</td>
                    <td>{e.batch}</td>
                    <td>
                        <Button variant="primary" onClick={()=>{navigate(`/EditUser/${i}`)}}>Edit</Button>
                        &nbsp;
                        <Button variant="danger" onClick={()=>handleDelete(i)}>Danger</Button>
                         
                    </td>
                </tr>
            })
        }
        
      </tbody>
    </Table>
              </div>
  </>
}

export default Dashboard