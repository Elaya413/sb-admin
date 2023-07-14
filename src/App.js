import SideBar from "./Components/SideBar";
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import{useState} from "react";
function App() {
 
  let[users,setUsers]=useState([
    {
      name:"Elaya",
      email:"elaya@gmail.com",
      address:"155,nehru street,comibatore",
      mobile:"8765987328",
      batch:"B46WET"
    },
    {
      name:"anbu",
      email:"anbu@gmail.com",
      address:"18,gandhi street,trichy",
      mobile:"9870634598",
      batch:"B46WET"
    },
    {
      name:"babu",
      email:"babu@gmail.com",
      address:"456,upparapatti,selam",
      mobile:"9870335578",
      batch:"B46WET"
    }
  ])
  return<>
  <BrowserRouter>
  <div id="wrapper">
<SideBar/>

 
  <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
       <Routes>
        <Route path="/Dashboard" element={<Dashboard users={users} setUsers={setUsers}/>}/>
        <Route path="/AddUser" element={<AddUser  users={users} setUsers={setUsers}/>}/>
        <Route path="/EditUser/:id" element={<EditUser  users={users} setUsers={setUsers}/>}/>
       </Routes>
          </div>
      </div>
      </div>
      </BrowserRouter>
  </>

}

export default App;
