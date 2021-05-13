import './App.css';
import './components/Signin'
import SignIn from './components/Signin';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { clearMessage } from "./actions/Message";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/Dashboard';

import { history } from "./helpers/history";

function App() {

  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);  

  return (
    <div className="App">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Dashboard />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
