import React from 'react'
import styled from 'styled-components'

const TitleH1 = styled.h1`
  display: inline-block;
  text-align: center;
  margin: 20px 20px;
  width: ${({width}) => width ? width : 'auto'};
  user-select: none;
`

export default function Title({text, width}) {
  return (
    <TitleH1 width={width}>{text}</TitleH1>
  )
}
