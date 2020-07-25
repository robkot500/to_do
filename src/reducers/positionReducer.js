const initState = {
    position: "list"
}

const positionReducer = (state = initState, action) => {
    console.log(action.id);
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