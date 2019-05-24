import React from 'react'
import { connect } from 'react-redux'

import { addSong } from '../actions'
import Input from './Input'

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="item">
        <div
          htmlFor="title"
          className="content"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: '10px'
          }}
        >
          Title:
          <Input name="title" />
        </div>
        <div
          htmlFor="duration"
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          Duration:
          <Input name="duration" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingTop: '10px'
          }}
        >
          <button className="ui button">Submit</button>
        </div>
      </form>
    )
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addSong(this.props.formValues)
  }
}

const mapStateToProps = state => {
  return { formValues: state.formValues }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addSong: () => dispatch(addSong)
//   }
// }

export default connect(
  mapStateToProps,
  { addSong }
)(Form)
