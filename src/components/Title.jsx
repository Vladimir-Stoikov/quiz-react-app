import React from 'react'
import styled from 'styled-components'

const TitleH1 = styled.h1`
  display: inline-block;
  text-align: center;
  font-size: 2rem;
  margin: ${({margin}) => margin ? margin : '20px 0'};
  width: ${({width}) => width ? width : 'auto'};
  user-select: none;
  @media (max-width: 450px) {
    font-size: 1.7rem;
  }
   @media (max-width: 360px) {
    margin: ${({margin}) => margin ? '20px 10px' : '20px 0'};
    font-size: 1.2rem;
  }
`

export default function Title({text, width, margin}) {
  return (
    <TitleH1 width={width} margin={margin}>{text}</TitleH1>
  )
}
