import React from 'react';
import { Link } from "react-router-dom";

import Main from '../components/Main';
import Title from '../components/Title';
import Button from '../components/Button';
import Question from '../components/Description';

export default function Start() {

  return (
    <>
      <Main>
        <Title text='Quiz' width='100%' />
        <Question text='Try to answer JavaScript Quiz Questions' />
        <Link to='/Quiz'><Button text='Start' func={() => console.log('next page')} /></Link>
      </Main>
    </>
  );
}
