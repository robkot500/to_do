const initItem = {
    todos: [
        {
            title: 'Get out of bed',
            titleMarked: false,
            id: 1,
            detail: [
                { point: 'wake my wife upGG', pointMarked: false },
                { point: 'check the weatherGG', pointMarked: true },
                { point: 'check the weatherGGG', pointMarked: false }
            ]
        },
        {
            title: 'Walk the dog',
            titleMarked: false,
            id: 2,
            detail: [
                { point: 'wake my wife upWW', pointMarked: true },
                { point: 'check the weatherWW', pointMarked: false },
                // { point: 'check the weatherWWW', pointMarked: false },

            ]
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
        case 'CHANGE_CHECK':
            console.log(state.todos);
            console.log(action.id)
            const todos = state.todos.map(each => {
                console.log(each.detail[0].pointMarked)
                const points = each.detail.map(each => {
                    console.log(each.pointMarked)
                    if (action.id === each.point) {
                        each.pointMarked === false ? (each.pointMarked = true) : (each.pointMarked = false)
                    }
                })

            })
            return {
                ...state,

            }


    }
    return state
}

export default itemReducer