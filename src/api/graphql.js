import { gql } from '@apollo/client';
import { MealPlan } from './types';


export const GET_MEMBER_MEAL_PLANS = gql`{
    memberMealplans(perPage:20, page: 1) ${MealPlan}
}`;

export const GET_MEMBER_MEAL_PLAN_BY_SLUG = gql`   
    query MealplanBySlug( $slug: String! ){
        mealplanBySlug(slug: $slug) ${MealPlan}
    }
`;

export const GET_SCHEMA = gql`
{
  __schema {
    types {
      name
      fields{
          name,
          description
      }
    }
  }
}`;

