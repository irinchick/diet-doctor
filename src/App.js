import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login'
import MealPlans from './components/MealPlans'
import MealPlanDetail from './components/MealPlanDetail'
import { GET_SCHEMA} from './api/graphql'
import { useQuery } from '@apollo/client';

function App() {
  const loggedIn = localStorage.getItem('token') ? true : false;
  const { loading, error, data, refetch, updateQuery } = useQuery(GET_SCHEMA);
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/meal-plan/:slug">
                <MealPlanDetail />
            </Route>
            <Route path="/">
              {loggedIn ? <MealPlans /> : <Login />}
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
