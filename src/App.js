import { BrowserRouter, Routes, Route,  } from "react-router-dom";
// components
import { Homepage  } from "./components/Homepage";
import Menu from "./components/Menu";
// pages
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import Error from "./Pages/Error";
const  App = () => {
  return (
    <BrowserRouter>
          <Menu/>
      <Routes>
          <Route path="/" element={<Homepage/>} ></Route>
          <Route path="/projects" element={<Projects/>} ></Route>
          <Route path="/contact-me" element={<Contacts/>} ></Route>
          <Route path="*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
