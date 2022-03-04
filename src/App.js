import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';
import Bollywood from './Bollywood/bollywood';
import NotFound from './AppUtils/NotFound';
import Hollywood from './Hollywood/Hollywood';
import Contacts from './Contacts/Contacts';
import Sports from './Sports/Sports';


function App() {
 

  return (
    <React.Fragment>
 <div className="App">
     this is react app app component
    </div>

<div className="subheading"> 
    <Link to="/bollywood">Bollywood</Link>
    <Link to="/hollywood">Hollywood</Link>
    <Link to="/contacts">Contacts</Link>
    <Link to="/sports">Sports</Link>

  

</div>


          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/bollywood" />)} />
            <Route exact path="/bollywood" component={Bollywood} />
            <Route exact path="/hollywood" component={Hollywood} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/sports" component={Sports} />

            <Route path="*" component={NotFound} />
          </Switch>



    </React.Fragment>
   
  );
}

export default App;
