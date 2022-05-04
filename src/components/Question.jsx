import React from 'react'
import styled from 'styled-components'

const QuestionArticle = styled.article`
padding: 0 20px;
text-indent: 1rem;
`

export default function Question({text}) {
  return (
    <QuestionArticle>{text}</QuestionArticle>
  )
}
