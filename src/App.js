import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./components/context";
import Navbar from "./components/navbar/Navbar";
import Contacts from "./components/contacts/Contacts";
import Contact from "./components/contacts/Contacts";
import About from "./components/pages/About";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import PageNotFound from "./components/pages/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Navbar title="Contacts List" />
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contacts/add" component={AddContact} />
            <Route exact path="/contacts/edit/:id" component={EditContact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/about/:id" component={About} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
