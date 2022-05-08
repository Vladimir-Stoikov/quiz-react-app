import React from 'react'
import styled from 'styled-components'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ForwardArrowSt = styled(ArrowForwardIosIcon)`
  margin: 0;
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
  opacity: ${({disable}) => disable ? '0.5' : '1'};
  border: none;
  background: transparent;
`

export default function ForwardArrow({func, disable}) {
  return <ButtonArrow onClick={func} disable={disable}><ForwardArrowSt /> </ButtonArrow>
}
