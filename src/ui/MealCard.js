import React from 'react';
import styled from 'styled-components';

const MealCardWrapper = styled.div`
    background-image: ${props => props.image ? `url(${props.image})`: ``};
    background-size: cover;
    background-position: 50% 50%;
    position: absolute;
    background-color: #000000;
    width:100%;
    height:100%;
    top:3.5rem;
    left:0;

    h2{
      margin: 0;
      background: linear-gradient(#000000, rgba(0,0,0,0));
      padding: .5rem;
      font-size: .8rem;
      color: #ffffff;
    }
    p{
      display:none;
      font-size: .8rem;
      color: #ffffff;
    }
    &:hover{
      background-image: none;
      p{
        display:block;
        padding: .5rem
      }
    }
    `;
    

const MealCard =  props => {
    const { title, description, image, additionalInfo } = props;

    return (
      <MealCardWrapper image={image}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{additionalInfo}</p>
      </MealCardWrapper>
  );
}

export default MealCard;
