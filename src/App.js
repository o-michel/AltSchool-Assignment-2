import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Homes from "./Pages/Home";
import Users from "./Pages/Users";
import Belivers from "./Components/Belivers";
import NonBelivers from "./Components/NonBelivers";
import "./style.css";
import PageNotFound from "./Components/PageNotFound";
import ErrorBoundary from "./Components/ErrorBoundary";



function App() {
  // var userChild = {
  //   heroName: "Belivers",
  //   heroName2: "nonBelivers"
  // }

  return (
    <div className="App">

      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="users">Users</Link>
        </nav>
        <Routes>
          <Route path="/" element={ <ErrorBoundary><Homes /> </ErrorBoundary>} />
          
          <Route className='nastedContainer' path="/users"  element={ <ErrorBoundary><Users /></ErrorBoundary>}>
          
            <Route   path="Belivers" element={<ErrorBoundary><Belivers heroName= "Belivers" /> </ErrorBoundary>} />
            <Route   path="nonBelivers" element={ <ErrorBoundary> <NonBelivers heroName= "NonBelivers"/></ErrorBoundary>} />
          

          </Route>
         
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
