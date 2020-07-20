const initState = {
    position: "list"
}

const rootReducer = (state = initState, action) => {
    console.log(state);
    switch (action.type) {
        case 'DISPLAY':
            console.log(action.id)
            return {
                ...state,
                position: action.id
            }
    }
    return state
}

export default rootReducer