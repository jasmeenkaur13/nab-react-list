import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "./containers/Login/Login";
import Dashboard from "./containers/Dashboard/Dashboard";
import { AppContext } from "./libs/contextLib";
import { UserContext } from "./libs/userTypeContextLib";

/**
 * 
 * @returns 
 */
function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [userType, setUserType] = useState(false);

  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <div className="App" >
        <Switch>
          <UserContext.Provider value={{ userType, setUserType }}>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </UserContext.Provider >
        </Switch>
      </div>
    </AppContext.Provider >
  );

}

export default App;