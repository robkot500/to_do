const initItem = {
    todos: [
        {
            title: 'Get out of bed',
            titleMarked: false,
            id: 1,
            detail: [
                { point: 'wake my wife upGG', pointMarked: false },
                { point: 'check the weatherGG', pointMarked: false },
                { point: 'check the weatherGGG', pointMarked: false }
            ]
        },
        {
            title: 'Walk the dog',
            titleMarked: false,
            id: 2,
            detail: [
                { point: 'wake my wife upWW', pointMarked: false },
                { point: 'check the weatherWW', pointMarked: false },
            ]
        }
    ],
    selectedItem: {
        id: 1
    },


}



const itemReducer = (state = initItem, action) => {

    switch (action.type) {
        case 'DELETE':
            let newItems = state.todos.filter(item => {
                return item.id != action.id
            })
            return {
                ...state,
                todos: newItems,
                selectedItem: newItems[0]
            }
        case 'DISPLAY_DETAIL':
            return {
                ...state,
                selectedItem: { id: action.id }

            }
        case 'ADD_NEW_TASK':
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
            const todo = state.todos.find((todoItem) => {
                return todoItem === action.id;
            })
            const restTodos = state.todos.filter(each => {
                return each != todo
            })
            console.log(restTodos);
            return {
                ...state,
                todos: [...restTodos, { ...todo, titleMarked: !todo.titleMarked }]
            };
        case 'CHANGE_TITLE_LIST':
            console.log(action.id);
            function findTodoList(todoList) {
                return todoList = action.id
            }
            const todoList = state.todos.find((findTodoList) => {
                return findTodoList
            })
            const restTodo = state.todos.filter(each => {
                return each != todoList
            })
            console.log(todoList);
            console.log(...state.todos);
            console.log(state);
            return {
                ...state,
                todos: [...restTodo, { ...todoList, titleMarked: !todoList.titleMarked }],
            }

    }
    return state
}

export default itemReducer