import React from 'react'
import styled from 'styled-components';

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
`

export default function RadioOption({text, id}) {
  return <Li>
    <Input type='radio' id={`question-id-${id}`} name='questions'/>
    <Label htmlFor={`question-id-${id}`} />
    {text}
  </Li>
}
