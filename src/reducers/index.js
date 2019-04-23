import { combineReducers } from 'redux'

export const songsReducer = () => {
  return [
    {
      title: 'Dont cry for me, Argentina',
      duration: '4:05'
    },
    {
      title: 'The Heart Must Go On',
      duration: '6:10'
    },
    {
      title: 'Asereje',
      duration: '2:32'
    },
    {
      title: 'Mein Teil',
      duration: '5:45'
    }
  ]
}

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
