import './App.scss';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from './components/Home'
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index  path="Portfolio" element = {<Home />} />
            <Route path="Portfolio/about" element = {<About />} />
            <Route path="Portfolio/contact" element = {<Contact />} />
            <Route path="Portfolio/myportfolio" element = {<Portfolio />} />
            <Route path="Portfolio/dashboard" element = {<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
