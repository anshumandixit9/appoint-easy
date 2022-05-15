import Login from "./components/login/login";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
  

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/Login"><Login/></Route>
    //       <Route path = "/Register" element={<Register/>}/>
    //     </Routes>
    //     </div>
    //   </Router>
    <div>
      <Login/>
    </div>
  );
}

export default App;
