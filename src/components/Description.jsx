import React from 'react'
import styled from 'styled-components'

const QuestionArticle = styled.article`
padding: 0 20px;
text-indent: 1rem;
@media (max-width: 350px) {
  text-align: center;
  padding: 0 10px;
}
`

export default function Question({text}) {
  return (
    <QuestionArticle>{text}</QuestionArticle>
  )
}
