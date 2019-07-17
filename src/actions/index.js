// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_API = "FETCHING_API";
export const SUCCESS_API = "SUCCESS_API";
export const FAILURE_API = "FAILURE_API";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export function getCharacters() {
    return (dispatch) => { 
        dispatch({ type: FETCHING_API })
        
		axios.get('https://swapi.co/api/people/')
			.then((res) => {
				console.log(res.data)
				dispatch({ type: SUCCESS_API, payload: res.data })
			})
			.catch((err) => {
				dispatch({ type: FAILURE_API, payload: err.response.data })
			})
		
	}
}