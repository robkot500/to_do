const initItem = {
    todos: [
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

            let newItems = state.todos.filter(item => {
                return item.id != action.id
            })

            console.log(state.selectedItem.id);
            return {
                ...state,
                todos: newItems,
                selectedItem: newItems[0]
            }
        case 'DISPLAY_DETAIL':
            console.log(action.id);
            return {
                ...state,
                selectedItem: { id: action.id }

            }
        case 'ADD_NEW_TASK':
            console.log(action.newTask.id);
            console.log(action.newTask);
            return {
                ...state,
                todos: [...state.todos, action.newTask],
                selectedItem: { id: action.newTask.id },
            }


    }
    return state
}

export default itemReducer