import React from 'react'
import styled from 'styled-components';

const BottomButton = styled.button`
  position: absolute;
  width: 100%;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3rem;
  background-color: var(--second-main-color);
  border: none;
  border-top: var(--first-main-color) solid 0.2rem;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  font-family: inherit;
  color: var(--second-background-color);
  text-shadow: 0 0 5px var(--second-main-color);
  box-shadow: inset 0 0 10px rgba(0,0,0, 0.15);
  font-size: 1.7rem;
  transition: all .2s ease;
  &:hover {
    background-color: var(--first-background-hover-color);
  }
  &:active {
    background-color: var(--first-background-active-color);
  }
  @media (max-width: 400px) { 
    border-radius: 0;
  }
   @media (max-width: 300px) { 
    font-size: 1.2rem;
  }
`

export default function Button({text, func}) {
  return (
    <BottomButton onClick={func}>{text}</BottomButton>
  )
}
