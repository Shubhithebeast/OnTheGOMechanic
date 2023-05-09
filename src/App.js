import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/AboutDetails/About";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Mechanicform from "./components/MechanicForm/Mechanicform";
import Layout from "./Layout";
// import Userregistration from "./components/User/Userregistration";
import Registrationform from "./components/User/RegistrationForm";

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
                {/* <h1>Hello</h1> */}
                <Home/>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
