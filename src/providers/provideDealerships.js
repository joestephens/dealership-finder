import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class ProvideDealerships extends Component {
  static propTypes = {
    ChildComponent: PropTypes.oneOfType([
      PropTypes.instanceOf(Component),
      PropTypes.func
    ]).isRequired,
    latLng: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }).isRequired
  }

  state = {
    dealerships: []
  }

  componentDidMount () {
    this.componentWillReceiveProps(this.props)
  }

  componentWillReceiveProps ({ latLng }) {
    if (!latLng) return

    axios.get('/api/dealerships.json')
      .then(({ data: dealerships }) => this.setState({ dealerships }))
      .catch(err => console.error(err))
  }

  render () {
    const { ChildComponent, ...props } = this.props
    const { dealerships } = this.state

    return (
      <ChildComponent dealerships={dealerships} {...props} />
    )
  }
}

const provideDealerships = childComponent => props => ( // eslint-disable-line
  <ProvideDealerships {...props} ChildComponent={childComponent} />
)

export default provideDealerships
