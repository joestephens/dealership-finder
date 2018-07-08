import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import axios from 'axios'
import Input from './Input'
import Button from './Button'
import Toast from './Toast'
import { handleInputChange } from '../helpers'

const LocationFinderWrapper = styled.div``

const Table = styled.div`
  display: table;
  width: 100%;
`

const PostCodeCell = styled.div`
  display: table-cell;
  width: 100%;
`

const SearchBtnCell = styled.div`
  display: table-cell;
  padding-left: 1.5rem;
`

const LocationBtnCell = styled.div`
  width: 100%;
  padding-top: 2rem;
`

/**
 * Retrieves lat/lng coordinates from postcode or user's location and passes 
 * them in an object to the onSearch prop call as an argument
 */
class LocationFinder extends Component {
  state = {
    form: {
      postcode: ''
    }
  }

  onInputChange = handleInputChange.bind(this)

  useMyLocation = () => {
    const { navigator: { geolocation } } = window
    const { onSearch } = this.props

    if (geolocation) {
      geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        onSearch({ latitude, longitude })
      })
    } else {
      toast.error('Your browser doesn\'t support location tracking')
    }
  }

  searchForAddress = () => {
    const { onSearch } = this.props
    const { form: { postcode } } =  this.state

    const endpoint = 'https://maps.googleapis.com/maps/api/geocode/json'
    const key = process.env.REACT_APP_GOOGLE_KEY

    axios.get(`${endpoint}?address=${postcode}&key=${key}`)
      .then(({ data: { results } }) => {
        if (!results || !results.length) {
          return toast.error('No location matching postcode found')
        }

        const { 
          geometry: { 
            location: { 
              lat: latitude, 
              lng: longitude 
            } 
          }
        } = results[0]
        onSearch({ latitude, longitude })
      })
      .catch(err => {
        console.error(err)
        toast.error(`
          Unable to retrieve location. 
          Please try again or use 'Use my location' button`
        )
      })
  }

  render () {
    const { onInputChange, searchForAddress, useMyLocation } = this
    const { form: { postcode } } = this.state

    return (
      <LocationFinderWrapper>
        <Table>
          <PostCodeCell>
            <Input name="postcode" value={postcode} onChange={onInputChange} />
          </PostCodeCell>
          <SearchBtnCell>
            <Button onClick={searchForAddress} disabled={!postcode}>
              Search
            </Button>
          </SearchBtnCell>
        </Table>
        <LocationBtnCell>
          <Button onClick={useMyLocation} large>
            Use my location
          </Button>
        </LocationBtnCell>
        <Toast />
      </LocationFinderWrapper>
    )
  }
}

LocationFinder.propTypes = {
  /** Callback function which receives geo JSON object */
  onSearch: PropTypes.func.isRequired
}

export default LocationFinder
