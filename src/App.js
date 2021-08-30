
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
export default class App extends Component {
  a=10;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
          <News key="general"pageSize={6} country={"in"} category={"general"}/>
          </Route>
          <Route path="/sports" exact>
          <News key="sports"pageSize={6} country={"in"} category={"sports"}/>

          </Route>
          <Route path="/entertainment" exact>
          <News key="entertainment"pageSize={6} country={"in"} category={"entertainment"}/>
           
          </Route>

          <Route path="/health" exact>
          <News key="health"pageSize={6} country={"in"} category={"health"}/>
           
          </Route>
          <Route path="/technology" exact>
          <News key="technology"pageSize={6} country={"in"} category={"technology"}/>
           
          </Route>
          <Route path="/science" exact>
          <News key="science"pageSize={6} country={"in"} category={"science"}/>
           
          </Route>

          <Route path="/buisness" exact>
          <News key="business"pageSize={6} country={"in"} category={"business"}/>
           
          </Route>
        </Switch>
        
         </Router>
      </div>
    )
  }
}

