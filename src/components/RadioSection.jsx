import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import dataBase from '../data';



const AnswersUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 5% 0 0 15%;
  @media (max-width: 450px) {
    margin-left: 8%;
  }
`;


const Input = styled.input`
display: none;
&:checked + label {
  background-color: var(--second-main-color);
}
`

const Label = styled.label`
  display: inline-block;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: white;
  border: var(--second-main-color) solid 0.15rem;
  border-radius: 15px;
  margin-right: 15px;
  transition: all .2s ease;
`

const Li = styled.li`
  list-style: none;
  font-size: 1.2rem;
  user-select: none;
  margin: 8px 0;
  @media (max-width: 450px) {
    font-size: 1rem;
  }
`

export default function RadioSection({count, set, answers}) {

  const [data] = useState(dataBase);
  const [currentOption, setCurrentOption] = useState(answers[count] ? answers[count] : '');

  function handleChange(e) {
    setCurrentOption(e.target.id);
    set(prev => prev.map((el, id) => id === count ? e.target.id : el));
  }

  useEffect(() => {
    setCurrentOption(answers[count]);
  }, [count]);

  return  <AnswersUl>
  <Li>
    <Input type='radio' id={`question-id-1`} name='questions' onChange={handleChange} checked={currentOption === 'question-id-1'}/>
    <Label htmlFor={`question-id-1`} />
    {data[count].a}
  </Li>
  <Li>
    <Input type='radio' id={`question-id-2`} name='questions' onChange={handleChange} checked={currentOption === 'question-id-2'}/>
    <Label htmlFor={`question-id-2`} />
    {data[count].b}
  </Li>
  <Li>
    <Input type='radio' id={`question-id-3`} name='questions' onChange={handleChange} checked={currentOption === 'question-id-3'}/>
    <Label htmlFor={`question-id-3`} />
    {data[count].c}
  </Li>
  <Li>
    <Input type='radio' id={`question-id-4`} name='questions' onChange={handleChange} checked={currentOption === 'question-id-4'}/>
    <Label htmlFor={`question-id-4`} />
    {data[count].d}
  </Li>
        </AnswersUl>
}


