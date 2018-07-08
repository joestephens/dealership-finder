import React from 'react'
import styled from 'styled-components'

/**
 * Text Input
 */
const Input = styled.input`
  height: 4rem;
  border: 1px solid ${({ theme }) => theme.colors.outline};
  width: 100%;
  outline: 0;
  font-size: inherit;
  font-family: inherit;
  padding: 0 1.5rem;
  box-sizing: border-box;
  border-radius: 0.2rem;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.colors.outlineFocus};
  }
`

/** @component */
export default Input
