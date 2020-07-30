import React from 'react';
import styled from 'styled-components';

const WeekGridWrapper = styled.div`
    display: grid;
    margin-top: 1.3rem;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 4px;
    @media (max-width: 900px) {
        grid-template-columns: repeat(4, 1fr);
      }
    >* {
        width: auto;
        margin: 0;
        overflow: hidden;
        align-items: center;
    }
}
`

const WeekGridCell = styled.div`
    position: relative;
    img{
        @media (max-width: 900px) {
            max-height: 15rem
          }
    }
    `
const WeekCellTitle = styled.h3`
    position: absolute;
    text-transform: uppercase;
    font-weight: 300;
    left: 1rem;
    text-shadow: 3px -2px rgba(255,255,255, 0.5);
    @media (max-width: 900px) {
        text-shadow: 2px -1px rgba(255,255,255, 0.5);
        font-size: .8rem;
        left: .4rem;
      }
`

const WeekGrid =  props => {
    const { week } = props;
    return (
      <WeekGridWrapper>
        {week.map(day=> 
        <WeekGridCell>
            <WeekCellTitle>{day.day}</WeekCellTitle>
            <img src={day.image} />
        </WeekGridCell>)}
      </WeekGridWrapper>

  );
}

export default WeekGrid;
