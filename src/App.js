import SideBar from "./Components/SideBar";

import Dashboard from "./Components/Dashboard";

function App() {
  return<>
  <div id="wrapper">
<SideBar/>

 
  <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
         <Dashboard/>
          </div>
      </div>
      </div>
  </>
}

export default App;
