const initialState = {
    favorites: []
}

export default function mainReducer(state = initialState, action) {

    // console.log(action, state)

    const { type, payload } = action

    switch(type) {
        case 'ADD_FAV': 
            return {
                ...state,
                favorites: [...state.favorites, payload]
            }
        case 'REMOVE_FAV':
            return {
                ...state,
                favorites: state.favorites.filter(company => company !== payload)
            }
        default: 
            return state
    }

}