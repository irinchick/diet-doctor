import React from 'react';
import styled from 'styled-components';
import WeekGrid from './WeekGrid';
import { Link } from "react-router-dom";

const MealPlanCardWrapper = styled.div`
    border-bottom: 2px solid #f2f2f2;
    padding-bottom: 3rem;
    h2 {
        text-transform: uppercase;
        font-weight: 200;
        margin: 3rem 0 0;
    }
    p{
        margin-top: .5rem;
    }
`;

const MealPlanCard =  props => {
    const { title, description, weekSneakObj, link } = props;

    return (
      <MealPlanCardWrapper>
        <h2>{title}</h2>
        <p>{description}</p>
        {link && <Link to={link} >See full meal plan ></Link>}
        <WeekGrid week={weekSneakObj}/>
      </MealPlanCardWrapper>

  );
}

export default MealPlanCard;
