import React from 'react'
import styled from 'styled-components'

const ErrorSection = styled.section`
display: ${({show}) => show ? 'block' : 'none'};
  text-align: center;
  margin-top: 7%;
  padding: 5% 3%;
  background: var(--second-background-color);
  border-radius: 30px;
  border: 3px solid var(--second-main-color);
  font-size: 1.15rem;
`

export default function Error({text}) {
  return (
    <ErrorSection show={text}>{text}</ErrorSection>
  )
}
