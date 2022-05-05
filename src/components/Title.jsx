import React from 'react'
import styled from 'styled-components'

const TitleH1 = styled.h1`
  display: inline-block;
  text-align: center;
  margin: ${({margin}) => margin ? margin : '20px 0'};
  width: ${({width}) => width ? width : 'auto'};
  user-select: none;
`

export default function Title({text, width, margin}) {
  return (
    <TitleH1 width={width} margin={margin}>{text}</TitleH1>
  )
}
