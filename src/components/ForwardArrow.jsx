import React from 'react'
import styled from 'styled-components'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ForwardArrowSt = styled(ArrowForwardIosIcon)`
  color: var(--second-main-color);
  transition: all .3s ease;
  &:hover {
    color: var(--first-background-hover-color);
  }
  &:active {
    color: var(--first-background-active-color);
  }
`

const ButtonArrow = styled.button`
  border: none;
  background: transparent;
`

export default function ForwardArrow({func}) {
  return <ButtonArrow onClick={func}><ForwardArrowSt /> </ButtonArrow>
}
