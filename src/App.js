
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
const [country, setCountry] = useState("in")

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
          <News setProgress={setProgress} apiKey={apiKey} key="general"pageSize={6} country={country} setcountry={setCountry} category={"general"}/>
          </Route>
          <Route path="/sports" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="sports"pageSize={6} country={country} setcountry={setCountry} category={"sports"}/>

          </Route>
          <Route path="/entertainment" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="entertainment"pageSize={6} country={country} setcountry={setCountry} category={"entertainment"}/>
           
          </Route>

          <Route path="/health" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="health"pageSize={6} country={country} setcountry={setCountry} category={"health"}/>
           
          </Route>
          <Route path="/technology" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="technology"pageSize={6} country={country} setcountry={setCountry} category={"technology"}/>
           
          </Route>
          <Route path="/science" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="science"pageSize={6} country={country} setcountry={setCountry} category={"science"}/>
           
          </Route>

          <Route path="/business" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country={country} setcountry={setCountry} category={"business"}/>
           
          </Route>
          <Route path="/in" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="in" pageSize={6} country={"in"}  setcountry={setCountry} category={"general"}/>
           
          </Route>
          <Route path="/ae" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="ae" pageSize={6} country={"ae"}  setcountry={setCountry} category={"general"}/>
           
          </Route>
          <Route path="/us" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="us" pageSize={6} country={"us"}  setcountry={setCountry} category={"general"}/>
           
          </Route>
          <Route path="/za" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="za" pageSize={6} country={"za"}  setcountry={setCountry} category={"general"}/>
           
          </Route>
          <Route path="/au" exact>
          <News setProgress={setProgress} apiKey={apiKey} key="au" pageSize={6} country={"au"}  setcountry={setCountry} category={"general"}/>
           
          </Route>
        </Switch>
        
         </Router>
      </div>
    )
  
}

