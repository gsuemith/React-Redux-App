import axios from 'axios'
import { PRIVATE_KEY, PUBLIC_KEY as key, 
  URL, FORBIDDEN_GROUPS 
} from '../keys'

export const TYPE = "TYPE"

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START"
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS"
export const FETCH_CHARACTERS_FAIL = "FETCH_CHARACTERS_FAIL"

export const action = () => {
  return {type: TYPE, payload: ''}
}

export const getCharacters = () => dispatch => {
  dispatch({type:FETCH_CHARACTERS_START})
  
  let md5 = require('md5')
  let ts = Date.now();
  let hash = md5(ts + PRIVATE_KEY + key)
  
  axios.get(`${URL}&ts=${ts}&apikey=${key}&hash=${hash}`)
    .then(res =>{
      const characters = res.data.data.results
        .filter(character => {
          return !FORBIDDEN_GROUPS.find(id => id === character.id)
      })
      console.log("chars", characters)
      dispatch({
        type: FETCH_CHARACTERS_SUCCESS, 
        payload: characters
      })
    })
    .catch(err =>{
      console.log('errors', err)
      dispatch({
        type: FETCH_CHARACTERS_FAIL, 
        payload: err
      })
    })  
}