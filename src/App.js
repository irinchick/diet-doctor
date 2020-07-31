import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MealPlans from './components/MealPlans';
import MealPlanDetail from './components/MealPlanDetail';
//import { GET_SCHEMA} from './api/graphql';
//import { useQuery } from '@apollo/client';

function App() {
 // useQuery(GET_SCHEMA);
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/meal-plan/:slug">
                <MealPlanDetail />
            </Route>
            <Route path="/">
               <MealPlans /> 
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
