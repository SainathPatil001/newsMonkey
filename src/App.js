
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App (){

  const [progress, setProgress] = useState(0);
const [apiKey] = useState(process.env.REACT_APP_NEWS_API)

    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Switch>
          <Route path="/" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="general"pageSize={6} country={"in"} category={"general"}/>
          </Route>
          <Route path="/sports" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="sports"pageSize={6} country={"in"} category={"sports"}/>

          </Route>
          <Route path="/entertainment" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="entertainment"pageSize={6} country={"in"} category={"entertainment"}/>
           
          </Route>

          <Route path="/health" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="health"pageSize={6} country={"in"} category={"health"}/>
           
          </Route>
          <Route path="/technology" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="technology"pageSize={6} country={"in"} category={"technology"}/>
           
          </Route>
          <Route path="/science" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="science"pageSize={6} country={"in"} category={"science"}/>
           
          </Route>

          <Route path="/business" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country={"in"} category={"business"}/>
           
          </Route>
        </Switch>
        
         </Router>
      </div>
    )
  
}

