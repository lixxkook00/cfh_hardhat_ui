const initialState = false;

const hlcBalance = (state = initialState , action) => {
    switch (action.type) {
        case 'UPDATE':
            // console.log("called to change",action.payload.balance)
            return action.payload.balance

        default:
            return false;
    }
}

export { hlcBalance };