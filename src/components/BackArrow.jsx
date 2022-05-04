import React from 'react'
import styled from 'styled-components'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BackArrowSt = styled(ArrowBackIosIcon)`
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
  display: ${({disable}) => disable ? 'none' : 'inline-block'};
  background: transparent;
  border: none;
`

export default function BackArrow({func, disable}) {
  return <ButtonArrow disable={disable} onClick={func}><BackArrowSt  /></ButtonArrow>
}
