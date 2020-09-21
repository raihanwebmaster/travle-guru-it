import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import DateLine from './Components/DateLine/DateLine';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import PrivateRoute from './Components/Private Route/PrivateRoute';
import ViewaddressLocation from './Components/ViewaddressLocation/ViewaddressLocation';

export const UserContext = createContext();

function App() {
   const [loggedInUser, setLoggedInUser]=useState({});
  return (
     <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
           <Route exact path="/">
              <Main></Main>
           </Route>
           <Route  path="/home">
              <Main></Main>
           </Route>
           <Route path="/booking/:viewCardName">
              <DateLine></DateLine>
           </Route>
           <Route  path="/login">
              <Login></Login>
           </Route>
           <PrivateRoute path="/ViewLocation">
              <ViewaddressLocation></ViewaddressLocation>
           </PrivateRoute>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
