import React, { useState } from 'react';
import styled from 'styled-components';

import Main from '../components/Main';
import Title from '../components/Title';
import Button from '../components/Button';
import Question from '../components/Question';
import dataBase from '../data';
import RadioSection from '../components/RadioSection';
import BackArrow from '../components/BackArrow';
import ForwardArrow from '../components/ForwardArrow';
import Error from '../components/Error';


const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Quiz() {
  const [data] = useState(dataBase);
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState(data.map(() => 'empty'));
  const [error, setError] = useState(null);

  function checkQuiz() {
    console.log('check')
    let allComplete = true;
    answers.forEach(answer => {
      if(answer === 'empty') allComplete = false;
    } )
    if(allComplete) {
      console.log('End page');
    } else {
      setError('You have some not answered questions!')
    }
  }
 
  return (
    <>
      <Main height='370px'>
        <Header>
          <BackArrow disable={counter === 0 ? true : false} func={() => setCounter(prev => (prev !== 0 ? (prev -= 1) : prev))} />
          <Title text={'Question ' + (counter + 1) + ' / ' + data.length} />
          <ForwardArrow func={() => setCounter(prev => (prev < data.length - 1 ? (prev += 1) : prev))} />
        </Header>
        <Question text={data[counter].question} />
        <RadioSection count={counter} set={setAnswers} answers={answers}/>
        <Button text='Check' func={checkQuiz} />
      </Main>
      <Error text={error}/>
    </>
  );
}
