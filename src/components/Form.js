import React from 'react'
import { connect } from 'react-redux'

import { addSong } from '../actions'
import Input from './Input'

class Form extends React.Component {
  render() {
    return (
      <form className="item">
        <div htmlFor="title" className="content">
          Title:
          <Input name="title" />
        </div>
        <br />
        <div htmlFor="duration">
          Duration:
          <Input name="duration" />
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return { songs: state.songs }
}

const mapDispatchToProps = dispatch => {
  return {
    addSong: () => dispatch(addSong)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
