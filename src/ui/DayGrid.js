import React from 'react';
import styled from 'styled-components';

const DayGridWrapper = styled.div`
    display: grid;
    margin-top: 1.3rem;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4px;
    @media (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
      }
    >* {
        width: auto;
        margin: 0;
        overflow: hidden;
        align-items: center;
    }
}
`



const DayGrid =  props => {
    const { breakfast, lunch, dinner } = props;
    return (
      <DayGridWrapper>
        
      </DayGridWrapper>

  );
}

export default DayGrid;
