export const selectSong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}

export const addSong = formInput => {
  return {
    type: 'ADD_SONG',
    payload: formInput
  }
}

export const onInputChange = event => {
  return {
    type: 'CHANGE_INPUT_VALUE',
    payload: { inputName: event.target.name, inputValue: event.target.value }
  }
}
