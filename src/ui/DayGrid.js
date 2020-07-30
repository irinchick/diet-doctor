import React from 'react';
import styled from 'styled-components';
import MealCard from './MealCard'
const DayGridWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1.3rem;
    justify-content: space-between;

    @media (max-width: 700px) {
        flex-direction: column;
      }
}
`
const MealCardWrapper = styled.div`
    flex-basis: 31%;
    overflow: hidden;
    position:relative;
    min-height: 15rem;

    @media (max-width: 700px) {
        flex-basis: 100vw;
        min-height: 70vh;
    }
`;


const DayGrid =  props => {
    const { cards, headers } = props;
    return (
      <DayGridWrapper>
          {cards.map( ( meal, i ) =>
            <MealCardWrapper>
                {headers[i] && <h3>{headers[i]}</h3>}
                {meal.recipe && <MealCard 
                    title={meal.recipe.title}
                    description={meal.recipe.description}
                    image={meal.image}
                />}
            </MealCardWrapper>
            )}
        
      </DayGridWrapper>

  );
}

export default DayGrid;
