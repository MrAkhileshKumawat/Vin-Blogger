import React from 'react'
// import '../node_modules/react-bootstrap/dist/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/jquery/dist/jquery.min'
import './App.css';
import Home from './component/Home';
import About from './component/About'
import Service from './component/Service'
import Contact from './component/Contact'
import {Switch,Route} from 'react-router-dom';
import Login from './component/Login';
 



function App() {
  return (
    <>
      <Switch>
          <Route exact  path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login}/>
      </Switch>
    </>
  );
}

export default App;
