import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Main from '../components/Main'
import Title from '../components/Title'
import Description from '../components/Description'
import Button from '../components/Button'

export default function End() {

  const location = useLocation();
  const navigate = useNavigate();

  function returnToMenu() {

      navigate('/');

  }

  return <Main>
    <Title text='Congratulations' width='100%'/>
    <Description text={`You have - ${location.state} correct ${location.state === 1 ? 'answer' : 'answers'}!`}/>
    <Button text='Restart' func={returnToMenu}/>
  
  </Main>  
}


