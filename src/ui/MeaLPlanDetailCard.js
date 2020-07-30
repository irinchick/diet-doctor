import React from 'react';
import styled from 'styled-components';

const MealPlanCardWrapper = styled.div`
    h2 {
        text-transform: uppercase;
        font-weight: 200;
        margin: 3rem 0 0;
    }
    p{
        margin-top: .5rem;
    }
`

const MealPlanDetailCard =  props => {
    const { title, description, week, link } = props;
    return (
      <MealPlanCardWrapper>
        <h2>{title}</h2>
        <p>{description}</p>
        {week.map(day => <div>
          <h2>{day.name}</h2>
        </div>

        )}
      </MealPlanCardWrapper>

  );
}

export default MealPlanDetailCard;
