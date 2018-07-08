import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  height: 4rem;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
  border: 0;
  background-color: ${({ theme }) => theme.colors.buttonActive};
  color: ${({ theme }) => theme.colors.buttonActiveText};
  width: 100%;

  ${({ disabled, theme }) => disabled ? `
    background-color: ${theme.colors.buttonDisabled};
    color: ${theme.colors.buttonDisabledText};  
  ` : null}

  ${({ primary, theme }) => primary ? `
    background-color: ${theme.colors.buttonPrimary};
  ` : null}

  ${({ large }) => large ? `
    height: 6.4rem;
  ` : null}
`

/** @component */
export default Button
