import React from 'react'
import Card from './Card'

function Dashboard() {
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
  return<>
  <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
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
  </>
}

export default Dashboard