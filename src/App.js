// import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/AboutDetails/About";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Mechanicform from "./components/MechanicForm/Mechanicform";
import "./components/MechanicLogin/Mechaniclogin";
import Layout from "./Layout";
import Registrationform from "./components/User/RegistrationForm";
import Services from "./components/Service/Services";
import Mechaniclogin from "./components/MechanicLogin/Mechaniclogin";
import Userlogin from "./components/userlogin/Userlogin";
import Footer from "./components/Footer/Footer";
import Contact from "./components/contact/Contact";
import Accordion from "./components/accordion/Accordion";
import FindMechanic from "./components/Location/FindMechanic";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Layout>
                <Navbar />
                <Home />
              </Layout>
            }
          />
          <Route
            path="/home"
            element={
              <Layout>
                <Navbar />
                <h1>Hello</h1>
              </Layout>
            }
          />
          <Route
            path="/Registrationform"
            element={
              <Layout>
                <Navbar />
                <Registrationform />
              </Layout>
            }
          />
          <Route
            path="/Mechanicform"
            element={
              <Layout>
                <Navbar />
                <Mechanicform />
              </Layout>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Mechaniclogin" element={<Mechaniclogin />} />
          <Route path="/Userlogin" element={<Userlogin />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/FindMechanic" element = {<FindMechanic/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
