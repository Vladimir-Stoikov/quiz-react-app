import React, { useState } from 'react';
import styled from 'styled-components';

import Main from '../components/Main';
import Title from '../components/Title';
import Button from '../components/Button';
import Question from '../components/Question';
import dataBase from '../data';
import RadioOption from '../components/RadioOption';
import BackArrow from '../components/BackArrow';
import ForwardArrow from '../components/ForwardArrow';

const AnswersUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 5% 0 0 15%;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Quiz() {
  const [data] = useState(dataBase);
  const [counter, setCounter] = useState(0);
  console.log(data[counter].question, data[counter].answers);

  return (
    <>
      <Main height='370px'>
        <Header>
          <BackArrow disable={counter === 0 ? true : false} func={() => setCounter(prev => (prev !== 0 ? (prev -= 1) : prev))} />
          <Title text={'Question ' + (counter + 1) + ' / ' + data.length} />
          <ForwardArrow func={() => setCounter(prev => (prev < data.length - 1 ? (prev += 1) : prev))} />
        </Header>
        <Question text={data[counter].question} />
        <AnswersUl>
            <RadioOption text={data[counter].a} id='1' />
            <RadioOption text={data[counter].b} id='2' />
            <RadioOption text={data[counter].c} id='3' />
            <RadioOption text={data[counter].d} id='4' />
        </AnswersUl>
        <Button text='Next' func={() => setCounter(prev => (prev < data.length - 1 ? (prev += 1) : prev))} />
      </Main>
    </>
  );
}
