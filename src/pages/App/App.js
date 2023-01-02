
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResultPage from "../Result/SearchResult";
import Home from "../Home/Home";
import "../../css/App.css";

function App() 
{
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchResultPage/>
          </Route>
          <Route path="/">
             <Home/> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}//++function App() end

export default App;
