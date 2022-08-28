
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/home";  
/*import Form from "./app/form";
import Hform from "./app/hform";
import Project from "./app/project";
import Hero from "./app/hero";*/
import About from "./app/about";
import Work from "./app/work";
import Contact from "./app/contact";
// import Profile from "./app/profile";
import ErrorPage from "./app/errorpage";


function App() {
  return (
   
    
    <>
    
       
   
    <BrowserRouter> 
        <Routes>
        
            <Route index element={<Home />} />
            <Route path="/about"   element={<About />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/work"      element={<Work />} />
            {/* <Route path="/profile"      element={<Profile />} /> */}
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
      </BrowserRouter>
   
   
   </>
 
  );
}

export default App;
