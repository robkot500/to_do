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
            const todos = state.todos.map((todo) => {
                return {
                    ...todo, detail: todo.detail.map((each) => {
                        console.log(each);
                        if (action.id !== each.point) return each;
                        return { ...each, pointMarked: !each.pointMarked }
                    })
                }
            })
            return {
                ...state,
                todos
            };
        case 'CHANGE_TITLE_TASK':
            // function findTodo(todo) {
            //     return todo = action.id
            // }
            // const todo = state.todos.find((findTodo) => {
            //     return findTodo
            // })
            console.log(state.todos);
            console.log(action);
            const todo = state.todos.find((todoItem) => {
                return todoItem === action.id;
            })
            const restTodos = state.todos.filter(each => {
                return each != todo
            })
            console.log(restTodos);
            console.log(todo);
            return {
                ...state,
                todos: [...restTodos, { ...todo, titleMarked: !todo.titleMarked }]
            };
    }
    return state
}

export default itemReducer