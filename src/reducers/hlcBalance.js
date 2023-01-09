const initialState = false;

const hlcBalance = (state = initialState , action) => {
    switch (action.type) {
        case 'UPDATE':
            return action.payload.balance

        default:
            return false;
    }
}

export { hlcBalance };