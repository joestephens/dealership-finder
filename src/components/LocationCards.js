import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LocationCard from './LocationCard'
import { provideDealerships } from '../providers'

const LocationCardsWrapper = styled.div``

const LocationCardWrapper = styled.div`
  margin-top: 1.5rem;
`

const LocationCards = ({ 
  dealerships, 
  selectedDealershipId, 
  onChooseDealership 
}) => (
  <LocationCardsWrapper>
    {dealerships.map((dealership, index) => (
      <LocationCardWrapper key={dealership._id}>
        <LocationCard 
          number={index + 1}
          {...dealership}  
          selected={selectedDealershipId 
            ? dealership._id === selectedDealershipId 
            : !index
          }
          onChooseDealership={onChooseDealership}
        />
      </LocationCardWrapper>
    ))}
  </LocationCardsWrapper>
)

LocationCards.defaultProps = {
  dealerships: [],
  selectedDealershipId: ''
}

LocationCards.propTypes = {
  dealerships: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.shape({
        line1: PropTypes.string.isRequired,
        line2: PropTypes.string.isRequired,
        postcode: PropTypes.string.isRequired
      }).isRequired
    })
  ),
  selectedDealershipId: PropTypes.string,
  onChooseDealership: PropTypes.func.isRequired
}

export default provideDealerships(LocationCards)
