import React from 'react'
import { connect } from 'react-redux'

import { onInputChange } from '../actions'

class Input extends React.Component {
  render() {
    return (
      <input
        type="text"
        name={this.props.name}
        onChange={this.props.onInputChange}
      />
    )
  }
}

const mapStateToProps = state => {
  return { formValues: state.formValues }
}

export default connect(
  mapStateToProps,
  { onInputChange }
)(Input)
