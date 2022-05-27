import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/Register/Register";

import Menu from "./components/Menu/Menu";
import NewProject from "./components/Menu/NewProject";
import Projects from "./components/Menu/Projects";
import Login from "./components/login/Login";
import Home from "./components/pages/Extern";
import ListeProjets from "./components/ListeProjets/Index";
import Iso from "./components/Iso";
import Auditeur from "./components/auditeur/Index";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/audit" element={<Auditeur />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/newProject" element={<NewProject />} />
          <Route exact path="/iso" element={<Iso />} />
          <Route exact path="/listeProjets" element={<ListeProjets />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
