import React, { Component } from 'react'
import StepOne from './components/StepOne'

class App extends Component {
  state = {
    selectedDealershipId: ''
  }

  handleChooseDealership = selectedDealershipId => {
    this.setState({ selectedDealershipId })
  }

  render () {
    const { handleChooseDealership } = this
    const { selectedDealershipId } = this.state

    return (
      <StepOne 
        selectedDealershipId={selectedDealershipId}
        onChooseDealership={handleChooseDealership}
      />
    )
  }
}

export default App
