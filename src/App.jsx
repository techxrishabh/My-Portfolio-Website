import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home, Projects, Blog, Talks, Store, Contact} from "./pages";
import {Navbar} from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="talks" element={<Talks />} />
        <Route path="store" element={<Store />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
