// import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from "./screens/About"
import Services from "./screens/Services"
import Contact from "./screens/Contact"
import Blogs from "./screens/Blogs"
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from './screens/Home';
import Team from './screens/OurTeam';
import OurTeamPost from './screens/OurTeamPost';

function App() {
  return (
    <>
 
      {/* <main>  This is my first react website </main> */}
<Router>
         <Header />
         
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/ourteamposts" element={<Team />} />
        <Route path="/ourteamposts/:postId" element={<OurTeamPost />} />
      </Routes>


        <Footer />
      </Router>
     
    </>
  );
}

export default App;
