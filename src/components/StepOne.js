import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Content from './Content'
import H1 from './H1'
import P from './P'
import LocationFinder from './LocationFinder'
import LocationCards from './LocationCards'

const StepOneWrapper = styled(Content)``

/**
 * Choose dealership
 */
class StepOne extends Component {
  static propTypes = {
    selectedDealershipId: PropTypes.string,
    onChooseDealership: PropTypes.func.isRequired
  }

  static defaultProps = {
    selectedDealershipId: ''
  }

  state = {
    latLng: null
  }

  handleSearch = latLng => this.setState({ latLng })

  render () {
    const { handleSearch } = this
    const { latLng } = this.state
    const { selectedDealershipId, onChooseDealership } = this.props

    return (
      <StepOneWrapper>
        <H1>
          Find a Motorcycle dealership
        </H1>
        <P>
          Please enter a postcode, address or location and press search to find the closest dealership.
        </P>
        <LocationFinder onSearch={handleSearch} />
        {latLng && (
          <LocationCards 
            selectedDealershipId={selectedDealershipId} 
            onChooseDealership={onChooseDealership}
            latLng={latLng} 
          />
        )}
      </StepOneWrapper>
    )
  }
}

export default StepOne
