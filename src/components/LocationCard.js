import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'

/**
 * Search result for a motorcycle dealership
 */
const LocationCardWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.outline};
  border-radius: 0.3rem;
  padding: 2.5rem 1.5rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => darken(0.1, theme.colors.outline)};
  }

  ${({ selected, theme }) => selected ? `
    border-color: ${theme.colors.outlineFocus};

    &:hover {
      border-color: ${theme.colors.outlineFocus};
    }
  ` : null}
`

const Address = styled.div`
  padding: 1rem 0;
`

const Distance = styled.div`
  color: ${({ theme }) => theme.colors.textGrey};
`

const ResultNumber = styled.div`
  background-color: ${({ theme }) => theme.colors.outline};
  color: white;
  font-weight: bold;
  width: 3.2rem;
  height: 3.2rem;
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  padding: 0.9rem 0;
  border-bottom-left-radius: 0.3rem;
  text-align: center;

  ${({ selected, theme }) => selected ? `
    background-color: ${theme.colors.outlineFocus};
  ` : null}
`

const LocationCard = ({ number, name, address, selected }) => (
  <LocationCardWrapper selected={selected}>
    <ResultNumber selected={selected}>
      {number}
    </ResultNumber>
    {name}
    <Address>
      {address.line1}
      <br />
      {address.line2}
      <br />
      {address.postcode}
    </Address>
    <Distance>
      000 miles away (00 hour, 00 min)
    </Distance>
  </LocationCardWrapper>
)

LocationCard.defaultProps = {
  selected: false
}

LocationCard.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    line1: PropTypes.string.isRequired,
    line2: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired
  }).isRequired,
  selected: PropTypes.bool
}

export default LocationCard
