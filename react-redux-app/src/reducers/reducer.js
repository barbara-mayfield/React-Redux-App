import { 
    GET_JOKE_START,
    GET_JOKE_SUCCESS,
    GET_JOKE_ERROR 
} from '../actions/joke';

export const initialState = {
    joke: null,
    isLoading: false,
    error: null   
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_JOKE_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_JOKE_SUCCESS:
            return {
                ...state,
                joke: action.payload,
                isLoading: false
            }
        case GET_JOKE_ERROR: 
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default: 
            return state;
    }

}