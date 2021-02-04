import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import SearchJobs from "./components/SearchJobs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JobDetails from "./components/JobDetails";
import Favorites from "./components/Favorites";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/">
            <SearchJobs />
          </Route>

          <Route path="/details/:id">
            {/* bringing the state that comes from SearchJobs to JobDetails */}
            <JobDetails />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
