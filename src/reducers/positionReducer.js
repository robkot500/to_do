const initState = {
    position: "list",
    // date: new Date(2018, 11, 24, 10, 33)
    // date: "Jan 5, 2021 15:37:25"
    // date: 'Sat Sep 05 2020 00:00:00 GMT+0200 (czas środkowoeuropejski letni)'

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
        // case 'ADD_SET_DATE':
        //     console.log(state);
        //     console.log(action);
        //     return {
        //         ...state,
        //         date: action.setDate


        //     };

    }
    return state
}

export default positionReducer