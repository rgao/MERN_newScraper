import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/nav.js";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Footer from "./components/Footer/footer.js";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route path="*" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
