import { combineReducers } from 'redux'

export const changeInputValue = (formValues = {}, action) => {
  if (action.type === 'CHANGE_INPUT_VALUE') {
    return {
      ...formValues,
      [action.payload.inputName]: action.payload.inputValue
    }
  }

  return formValues
}

export const songsReducer = (songs = null, action) => {
  if (action.type === 'ADD_SONG') {
    return [...songs, action.payload]
  }

  return songs
}

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  formValues: changeInputValue
})
