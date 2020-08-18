const initItem = {
    todos: [
        {
            title: 'get out of bed',
            titleMarked: false,
            id: 1,
            date: new Date(2021, 11, 24, 10, 33),
            edit: false,
            flag: 'green',
            alarm: {
                setAlarm: null,
                isAlarm: false,
                iconOn: false
            },
            detail: [
                { point: 'wake my wife up', pointMarked: false },
                { point: 'check the weather', pointMarked: false },
                { point: 'nice cup of coffee', pointMarked: false }
            ],
            notes: 'Pour almond milk, coffee, sugar, and cream cheese into large plastic cup; blend with an immersion blender until the cream cheese is completely blended into the liquid, about 1 minute. Pour the blended beverage into a tall glass with ice cubes.Flavor variations: add 2 teaspoons of sugar-free chocolate syrup or other flavor, remembering to reduce the amount of sucralose used.'
        },
        {
            title: 'walk the dog',
            titleMarked: false,
            id: 2,
            date: new Date(2022, 11, 24, 10, 33),
            edit: false,
            flag: 'orange',
            alarm: {
                setAlarm: null,
                isAlarm: false,
                iconOn: false
            },
            detail: [
                { point: 'at least 2 km', pointMarked: false },
            ],
            notes: 'Put a leash and collar on the dog. There will come a time when your four-legged friend will recognize it is time to go for a walk by you simply reaching for the leash. Introduce this in your dog’s mind early on by using a collar at a young age. Place the collar around the dog’s neck and say “let’s walk” with the leash in full view.'

        },
        {
            title: 'to have fun at the party',
            titleMarked: false,
            id: 3,
            date: null,
            edit: false,
            flag: 'purple',
            alarm: {
                setAlarm: null,
                isAlarm: false,
                iconOn: false
            },
            detail: [
                { point: 'only few drinks', pointMarked: false },
                { point: 'meet new friends', pointMarked: false },
            ],
            notes: 'Pimm’s Cup. Starting with a large pitcher, combine the Pimm’s, orange and lemon slices and the mint. Leave it to chill for around 10 minutes then stir in the ginger ale. Take the pint glasses and stand two cucumber wedges on end in each glass. Fill them up halfway with ice then add the Pimm’s mixture. To finish, garnish by pushing the mint down into the drinks and divide the orange, lemon and apple slices between the drinks'
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
            console.log(state.todos);
            console.log('cccccccccccccccccccccccccc', action.newTask);
            return {
                ...state,
                todos: [...state.todos, action.newTask],
                selectedItem: { id: action.newTask.id },
            }

        case 'ADD_AFTER_EDIT':
            console.log(action);
            console.log(action.editedTask.detail);
            console.log(state.todos);
            // const edited = action.editedTask
            const newDetail = action.editedTask.detail.length > 0 ? (action.editedTask.detail.filter(each => each.point != null)) : (null)
            console.log(newDetail);
            // const newDeta = action.editedTask.detail.map()
            return {
                ...state,
                todos: state.todos.map(each => {
                    if (each.id != action.editedTask.id) return each; return {
                        ...each, title: action.editedTask.title, date: action.editedTask.date, detail: newDetail, flag: action.editedTask.flag
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
        case 'CLICK_TO_EDIT_TASK':
            console.log(action.id);
            console.log(state.todos)
            return {
                ...state,
                todos: state.todos.map(each => {
                    if (each.id != action.id) return each; return { ...each, edit: true }
                })

            }
        // case 'EDIT_TASK':
        //     console.log(action.id)
        //     console.log(action.editTask)

        //     const allTodos = state.todos.map(each => {
        //         console.log(each.flag);
        //         console.log(action.editTask.title)
        //         if (each.id != action.id) return each; return { ...each, edit: true }
        //     })
        //     console.log(allTodos)
        //     return {
        //         ...state,
        //         todos: [...allTodos]
        //         // todos: [...toNotEdit, toEdit[0]]
        //     };
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

        case 'ALARM_ON':
            console.log(state.todos);
            console.log(action.id);

            return {
                ...state,
                todos: state.todos.map(each => { if (each.id != action.id) return each; return { ...each, alarm: { setAlarm: null, isAlarm: true, iconOn: true } } })

            }
        case 'ALARM_OFF':
            console.log(state.todos);
            console.log(action.id);

            return {
                ...state,
                todos: state.todos.map(each => { if (each.id != action.id) return each; return { ...each, alarm: { setAlarm: null, isAlarm: false, iconOn: false } } })

            }
    }
    return state
}

export default itemReducer