import React from 'react';
import { GET_MEMBER_MEAL_PLAN_BY_SLUG } from '../api/graphql'
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import { MealPlanDetailCard } from '../ui'
import { getSortedWeekObject } from '../utils/getSortedWeek';

function MealPlanDetail() {
    const { slug } = useParams();
    const { loading, error, data } = useQuery(GET_MEMBER_MEAL_PLAN_BY_SLUG, {
        variables: {
            slug: slug
         }
    });
    if(loading)
        return <div>Loading...</div>
    if(error)
    return <div>Error...</div>

    
    const mealPlan = data.mealplanBySlug;
    const weekMeals = getSortedWeekObject(mealPlan.schedule);
    return  <MealPlanDetailCard 
        title = {mealPlan.title}
        description = {mealPlan.description}
        week = {weekMeals}
  />;
}

export default MealPlanDetail;
