const initState = {
    position: "list",

}

const positionReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DISPLAY':
            return {
                ...state,
                position: action.id
            };
        case 'DISPLAY_TASK':
            return {
                ...state,
                position: action.task
            };

    }
    return state
}

export default positionReducer