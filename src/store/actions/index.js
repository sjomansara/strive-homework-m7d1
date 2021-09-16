export const addFav = (company) => ({
    type: 'ADD_FAV',
    payload: company
})

export const removeFav = (company) => ({
    type: 'REMOVE_FAV',
    payload: company
})