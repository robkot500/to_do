const initItem = {
    todos: [
        {
            title: 'Get out of bed',
            titleMarked: false,
            id: 1,
            date: new Date(2021, 11, 24, 10, 33),
            edit: false,
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
            date: new Date(2022, 11, 24, 10, 33),
            edit: false,
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
            console.log(state);
            return {
                ...state,
                todos: [...state.todos, action.newTask],
                selectedItem: { id: action.newTask.id },
            }
        case 'ADD_AFTER_EDIT':
            console.log(action);
            console.log(action.editedTask.detail[0]);
            console.log(state.todos);
            const edited = action.editedTask

            return {
                ...state,
                todos: state.todos.map(each => {
                    if (each.id != action.editedTask.id) return each; return {
                        ...each, title: action.editedTask.title, detail: action.editedTask.detail,
                    }

                }),
                selectedItem: { id: action.editedTask.id },
            }
        // [...state.todos, action.editedTask],
        case 'CHANGE_CHECK':
            const todos = state.todos.map((todo) => {
                return {
                    ...todo, detail: todo.detail.map((each) => {
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
            console.log(state.todos);
            console.log(action.each);
            const todo = state.todos.find((todoItem) => {
                return todoItem === action.each;
            })
            const restTodos = state.todos.filter(each => {
                return each != todo
            })
            console.log(todo);
            console.log(todo.titleMarked);
            console.log(state);
            return {
                ...state,
                todos: [...restTodos, { ...todo, titleMarked: !todo.titleMarked }]
            };
        case 'CHANGE_TITLE_LIST':
            console.log(action.each);
            const todoList = state.todos.find((todoItem) => {
                return todoItem === action.each;
            })
            const restTodo = state.todos.filter(each => {
                return each != todoList
            })
            return {
                ...state,
                todos: [...restTodo, { ...todoList, titleMarked: !todoList.titleMarked }],

            }

        case 'EDIT_TASK':
            // console.log(state.todos);
            // console.log(action.id)
            // const toEdit = state.todos.filter(each => {
            //     return each.id === action.id
            // })

            // const toNotEdit = state.todos.filter(each => {
            //     return each.id != action.id
            // })
            // console.log('notedit', toNotEdit);
            // if (toEdit.length > 0) {
            //     toEdit[0].edit = true
            // }
            // else { toEdit[0] = null }
            // console.log(toEdit);
            // console.log(toEdit.length);
            const allTodos = state.todos.map(each => {
                if (each.id != action.id) return each; return { ...each, edit: true }
            })
            return {
                ...state,
                todos: [...allTodos]
                // todos: [...toNotEdit, toEdit[0]]
            };
        case 'EDIT_TASK_STATE':
            console.log(state.todos);
            console.log(action.task);
            const editNot = state.todos.map((each) => {
                return { ...each, edit: false }
            });
            console.log(editNot);
            return {
                ...state,
                todos: editNot
            };
    }
    return state
}

export default itemReducer