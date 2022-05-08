import React from 'react';
import styled from 'styled-components';

const MainWindow = styled.main`
  position: relative;
  width: 500px;
  height: ${({height}) => height ? height : 'auto'};
  padding: 0 0 70px 0;
  background-color: var(--second-background-color);
  border: var(--first-main-color) solid 0.2rem;
  border-radius: 30px;
  @media (max-width: 600px) {
    width: 80vw;
  }
  @media (max-width: 400px) {
    width: 100vw;
    border-radius: 0;
    border-left: 0;
    border-right: 0;
  }
  @media (max-width: 300px) { 
    height: ${({height}) => height ? '400px' : 'auto'};
  }
`

export default function Main({children, height}) {
  return (
    <MainWindow height={height}>{children}</MainWindow>
  )
}
