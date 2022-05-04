import React from 'react';
import styled from 'styled-components';

const MainWindow = styled.main`
  position: relative;
  width: 80vw;
  height: ${({height}) => height ? height : 'auto'};
  padding-bottom: 70px;
  background-color: var(--second-background-color);
  border: var(--first-main-color) solid 0.2rem;
  border-radius: 30px;
`

export default function Main({children, height}) {
  return (
    <MainWindow height={height}>{children}</MainWindow>
  )
}
