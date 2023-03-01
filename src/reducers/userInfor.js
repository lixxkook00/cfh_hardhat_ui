const initialState = false;

const userInfor = (state = initialState , action) => {
    switch (action.type) {
        case 'SET_INFOR':
            // console.log("action.payload.infor",action.payload.infor)
            return action.payload

        default:
            return state;
    }
}

export { userInfor };