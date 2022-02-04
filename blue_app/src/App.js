import React from "react";
import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./About";
import Search from "./Search";
import Shop from "./Shop";
import Home from "./Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App(){
  return (
    <Router>
     <div className="App">
       <Nav />
       <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/search" exact component={Search} />
          <Route path="/shop" exact component={Shop} />
        </Routes>
        <Footer />
     </div>
    </Router>
  );
}

export default App;