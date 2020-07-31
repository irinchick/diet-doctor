import React from 'react';
import { GET_MEMBER_MEAL_PLANS } from '../api/graphql';
import { useQuery } from '@apollo/client';
import { MealPlanCard } from '../ui';
import { imageHostUri } from '../utils/constants';
import { getSortedWeekObject } from '../utils/getSortedWeek';

const shapeWeekObj = schedule => {
    return getSortedWeekObject(schedule).map( day => {
        return {
            day: day.name,
            image: `${imageHostUri}${day.dinner.recipesDetails[0].images.vt}?w=300&h=400`
        }
    })
};

function MealPlans() {
    const { loading, error, data } = useQuery(GET_MEMBER_MEAL_PLANS);

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>Error...</div>
    }
        

    const mealPlans = data.memberMealplans;
    
    return (
    <>
      {mealPlans.map(mealPlan => {
      return <MealPlanCard 
        key={mealPlan.id} 
        title = {mealPlan.title}
        description = {mealPlan.description}
        weekSneakObj = {shapeWeekObj(mealPlan.schedule)}
        link = {`/meal-plan/${mealPlan.slug}`}
      
      />})}
    </>
  );
}

export default MealPlans;
