const initItem = {
    items: [
        {
            title: 'Get out of bed',
            id: 1,
            detail: {
                pointOne: 'wake my wife up',
                pointTwo: 'check the weather'
            }
        },
        {
            title: 'Walk the dog',
            id: 2,
            detail: {
                pointOne: 'wake my wife up',
                pointTwo: 'check the weather'
            }
        }
    ],
    selectedItem: {
        id: 1
    }

}



const itemReducer = (state = initItem, action) => {

    switch (action.type) {
        case 'DELETE':
            console.log(action.id);
            console.log(state.selectedItem.id);

            let newItems = state.items.filter(item => {
                return item.id != action.id
            })

            console.log(state.selectedItem.id);
            return {
                ...state,
                items: newItems,
                selectedItem: newItems[0]
            }
        case 'DISPLAY_DETAIL':
            return {
                ...state,
                selectedItem: { id: action.id }

            }
        case 'ADD_NEW_TASK':
            console.log(action);
            console.log(state);
            return {
                ...state,
                items: [...state.items, action.newTask],
                selectedItem: { id: action.newTask.id },
                // position: action.task
            }


    }
    return state
}

export default itemReducer