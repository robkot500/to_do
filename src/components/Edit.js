import React, { useState } from 'react'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

function Edit(props) {
    console.log(props);
    console.log(props.add.item.todos[0]);
    const toEdit = props.add.item.todos.filter(each => {
        console.log(each);
        return each.edit === true
    })
    console.log('toEdit', toEdit);
    let initState
    if (toEdit.length > 0) { initState = toEdit[0] }
    else { initState = props.add.item.todos[0] }
    console.log(toEdit);
    console.log(toEdit.lenght);
    const [startDate, setStartDate] = useState(null);
    const [editTask, setEditTask] = useState(initState)
    console.log(editTask);


    const handleMouseDown = (e) => {

        if (e.target.id === 'newTask') {

            setEditTask({ ...editTask, title: null })
            console.log('oooooooooooooooooo', editTask);
        }
        if (e.target.id === 'pointOne') {
            setEditTask({
                ...editTask, detail: editTask.detail.map(each => { if (each !== editTask.detail[0]) return each; return { ...each, point: null } }
                )
            })
        }
        if (e.target.id === 'pointTwo') {
            setEditTask({
                ...editTask, detail: editTask.detail.map(each => { if (each !== editTask.detail[1]) return each; return { ...each, point: null } }
                )
            })
        }
        if (e.target.id === 'pointThree') {
            setEditTask({
                ...editTask, detail: editTask.detail.map(each => { if (each !== editTask.detail[2]) return each; return { ...each, point: null } }
                )
            })
        }

    }
    const handleChange = (e) => {
        if (e.target.id === 'newTask') {
            setEditTask({ ...editTask, title: e.target.value })
        }
        if (e.target.id === 'pointOne') {
            setEditTask({
                ...editTask, detail: editTask.detail.map(each => { if (each !== editTask.detail[0]) return each; return { ...each, point: e.target.value } }
                )
            })
        }
        if (e.target.id === 'pointTwo') {
            setEditTask({
                ...editTask, detail: editTask.detail.map(each => { if (each !== editTask.detail[1]) return each; return { ...each, point: e.target.value } }
                )
            })
        }
        if (e.target.id === 'pointThree') {
            setEditTask({
                ...editTask, detail: editTask.detail.map(each => { if (each !== editTask.detail[2]) return each; return { ...each, point: e.target.value } }
                )
            })
        }
    }




    const handleSubmit = (e, id) => {
        e.preventDefault()
        console.log(editTask);
        editTask.date = startDate
        props.editTask(editTask)
        props.addAfterEdit(editTask)
        props.displayDetail(editTask.id)
        props.display('task')



    }
    // const handleDate = (date) => {
    //     setStartDate(date)
    // }


    return (
        <>
            <form onSubmit={handleSubmit} type='submit'>
                <input onChange={handleChange} onMouseDown={handleMouseDown} value={editTask.title} placeholder='optional' id='newTask' type="text" />
                <label htmlFor="text">new task</label>
                <input onChange={handleChange} onMouseDown={handleMouseDown}
                    value={editTask.detail[0] ? (editTask.detail[0].point) : (null)}
                    placeholder='optional' id='pointOne' type="text" />
                <label htmlFor="text">point one</label>
                <input onChange={handleChange} onMouseDown={handleMouseDown}
                    value={editTask.detail[1] ? (editTask.detail[1].point) : (null)}
                    placeholder='optional' id='pointTwo' type="text" />
                <label htmlFor="text">point two</label>
                <input onChange={handleChange} onMouseDown={handleMouseDown}
                    value={editTask.detail[2] ? (editTask.detail[2].point) : (null)}
                    placeholder='optional' id='pointThree' type="text" />
                <label htmlFor="text">point three</label>
                <button>EDIT</button>
            </form >
        </>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    // console.log(addAfterEdit);
    return {
        add: state,
        position: state.position
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editTask: (editTask) => { dispatch({ type: 'EDIT_TASK', editTask: editTask }) },
        addAfterEdit: (editedTask) => { dispatch({ type: 'ADD_AFTER_EDIT', editedTask: editedTask }) },
        displayDetail: (id) => { dispatch({ type: 'DISPLAY_DETAIL', id: id }) },
        display: (id) => { dispatch({ type: 'DISPLAY', id: id }) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)