import React from 'react';
import { GET_MEMBER_MEAL_PLAN_BY_SLUG } from '../api/graphql';
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import { getSortedWeekObject } from '../utils/getSortedWeek';
import { DayGrid } from '../ui';
import { imageHostUri } from '../utils/constants';


function MealPlanDetail() {
    const { slug } = useParams();
    const { loading, error, data } = useQuery(GET_MEMBER_MEAL_PLAN_BY_SLUG, {
        variables: {
            slug: slug
         }
    });

    const getAdditionalInfo = details => `Nutrition values: ${details.nutrition.values.fat}g fat, ${details.nutrition.values.carbs}g carbs, ${details.nutrition.values.protein}g protein`

    
    if(loading){
        return <div>Loading...</div>
    }
        
    if(error) {
        return <div>Error...</div>
    }
    
    const mealPlan = data.mealplanBySlug;
    const week = getSortedWeekObject(mealPlan.schedule);;
    
    return <> 
        <h1>{mealPlan.title}</h1>
        <p>{mealPlan.description}</p>
        {week.map(day => {
          const meals = [day.breakfast, day.lunch, day.dinner].map(meal => {
              const details = meal.recipesDetails[0];
              console.log( getAdditionalInfo(details) )
              return {
                 recipe: details ? details : null ,
                 image: details && details.images ? `${imageHostUri}${details.images.default}?w=400&h=300` : null,
                 additionalInfo: details ? getAdditionalInfo(details) : null,
              }
          })
        return <div>
        <h2>{day.name}</h2>
            <DayGrid 
                cards ={meals} 
                headers={['Breakfast', 'Lunch', 'Dinner']}
            />
        </div>}
      )};
      </>
}

export default MealPlanDetail;
