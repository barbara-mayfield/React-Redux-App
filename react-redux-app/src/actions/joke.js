import axios from 'axios';

export const GET_JOKE_START = "GET_JOKE_START";
export const GET_JOKE_SUCCESS = "GET_JOKE_SUCCESS";
export const GET_JOKE_ERROR = "GET_JOKE_ERROR"

export function getJoke(){
    return dispatch => {
        dispatch: ({ type: GET_JOKE_START })

    axios
        .get("https://sv443.net/jokeapi/category/Programming")
        .then(res => {
            dispatch: ({ type: GET_JOKE_SUCCESS, payload: res.data.joke })
        })
        .catch(err => {
            dispatch: ({ type: GET_JOKE_ERROR, payload: err })
        })
    }
}