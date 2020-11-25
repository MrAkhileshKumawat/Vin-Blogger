import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/jquery/dist/jquery.min'
import './App.css';
import Home from './component/views/Home';
import {Switch,Route, Redirect} from 'react-router-dom';

import NewPost from './component/innerviews/NewPost';
import Explore from './component/views/Explore';

import Footer from './component/views/Footer';
import Left_nav from './component/innerviews/Left_nav';
import About2 from './component/views/About2'
import News from './component/views/News';

import Login2 from './component/Auths/Login2'
import Singup2 from './component/Auths/Singup2'

// import Footer3 from './Footer3'



function App() {
  return (
    <div className="page-container" >
      {/* <Navbar2 /> */}
      <div className="content-wrap">
      <Switch>
          <Route exact  path="/" component={Home} />
          <Route exact  path="/posts/:id" component={Left_nav} />
          <Route exact path="/explore" component={Explore} />
          {/* <Route exact path="/Contact" component={Contact} /> */}
          <Route exact path="/login" component={Login2}/>
          <Route exact path ="/newpost" component={NewPost} />
          <Route exact path ="/signup" component={Singup2} />
          <Route exact path="/about" component={About2} />
          <Route exact path="/news" component={News} />
          <Route exact path="/explore/:searchword" component={Explore} />
          <Route exact path="/home/:searchword" component={Home} />
          <Redirect to="/" />
      </Switch>
      </div>
      <Footer/>
      {/* <Footer2/> */}
      {/* <Footer3/> */}
    </div>
  );
}

export default App;
