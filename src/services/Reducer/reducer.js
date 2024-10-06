const initialState = {
    cardData: []
}

export default function cratItems(state = initialState, action) {
    switch (action.type) {
        case Add_To_Cart:
            return {
                ...state,
                cardData: action.data
            }
            break;
            default:
                return state
    }
}