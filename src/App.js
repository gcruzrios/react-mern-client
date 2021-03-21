import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import routes from "./config/routes";

import "./App.scss";
import AuthProvider from "./providers/AuthProvider"

function App() {
  return (
    <AuthProvider>
      <Router>
          <Switch>
            {routes.map((route,index)=>(
              <RouterWithSubRoutes key={index} {...route} />
            ))}
          </Switch>
        </Router>

    </AuthProvider>
   
  );
}

function RouterWithSubRoutes(route){
  //console.log(route)
  return (
    <Route path={route.path} exact={route.exact} render={props => <route.component routes={ route.routes} {...props} />} />
  )
}
export default App;
