import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Contact from "./pages/Contact/Contact";
import Account from "./pages/Account/Account";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/women" component={Women} exact />
          <Route path="/men" component={Men} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/account" component={Account} />
          <Route path="/:id" component={ProductDetail} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
