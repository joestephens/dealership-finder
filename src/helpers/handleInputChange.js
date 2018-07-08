function handleInputChange (event) {
  const { target: { name, value } } = event

  this.setState(prevState => ({
    form: {
      ...prevState.form,
      [name]: value
    }
  }))
}

export default handleInputChange
