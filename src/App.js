import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Error from './components/Error/Error';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/posts/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/posts">
            <Home></Home>
          </Route>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route path = "*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
