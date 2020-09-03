import React, { useState } from 'react'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

function Edit(props) {
    const toEdit = props.add.item.todos.filter(each => {
        return each.edit === true
    })
    let initDate
    let initState
    if (toEdit.length > 0) { initDate = toEdit[0].date; initState = toEdit[0] }
    else if (props.add.item.todos.length > 0 && toEdit.length === 0) { initDate = props.add.item.todos[0].date; initState = props.add.item.todos[0]; console.log('wwwwww') }
    else { initDate = null; initState = null }
    const [startDate, setStartDate] = useState(initDate);
    const [editTask, setEditTask] = useState(initState)
    console.log(editTask)
    if (initState === null) {
        return (
            <div className='no-todos-container'>
                <p className='no-todos'>You have no todos left</p>
                <div className='leisure'></div>
            </div>
        )
    }




    const handleDate = (date) => {
        setStartDate(date)
        editTask.date = date
        setEditTask({ ...editTask, date: date })
    }

    console.log(editTask)
    const handleChange = (e) => {
        if (e.target.id === 'newTask') {
            setEditTask({ ...editTask, title: e.target.value })

        }
        if (e.target.id === 'pointOne') {
            setEditTask({
                ...editTask, detail: editTask.detail.map(each => { if (each !== editTask.detail[0]) return each; return { ...each, point: e.target.value } }
                )
            })
            if (editTask.detail[0] == undefined && e.target.value.length > 0) {
                editTask.detail[0] = { point: e.target.value, pointMarked: false }
                const newPoint = { point: e.target.value, pointMarked: false }
                setEditTask({
                    ...editTask, detail: editTask.detail.map(each => {
                        return each; return { ...each, newPoint }
                    })
                })


            }
        }
        if (e.target.id === 'pointTwo') {
            setEditTask({
                ...editTask, detail: editTask.detail.map(each => { if (each !== editTask.detail[1]) return each; return { ...each, point: e.target.value } }
                )
            })
            if (editTask.detail[1] == undefined && e.target.value.length > 0) {
                editTask.detail[1] = { point: e.target.value, pointMarked: false }
                const newPoint = { point: e.target.value, pointMarked: false }
                setEditTask({
                    ...editTask, detail: editTask.detail.map(each => {
                        return each; return { ...each, newPoint }
                    })
                })


            }
        }
        if (e.target.id === 'pointThree') {
            setEditTask({
                ...editTask, detail: editTask.detail.map(each => {
                    if (each !== editTask.detail[2]) return each; return { ...each, point: e.target.value }
                })
            })

            if (editTask.detail[2] == undefined && e.target.value.length > 0) {
                editTask.detail[2] = { point: e.target.value, pointMarked: false }
                const newPoint = { point: e.target.value, pointMarked: false }
                setEditTask({
                    ...editTask, detail: editTask.detail.map(each => {
                        return each; return { ...each, newPoint }
                    })
                })
            }
        }
        if (e.target.id === 'selectColor') { console.log(e.target.value); setEditTask({ ...editTask, flag: e.target.value }) }
    }

    const handleSubmit = (e, id) => {
        e.preventDefault()
        props.editTask(editTask)
        props.addAfterEdit(editTask)
        props.displayDetail(editTask.id)
        props.display('task')
    }
    return (
        <>
            <div className='edit-container'>
                <form onSubmit={handleSubmit} type='submit'>
                    <input onChange={handleChange} value={editTask.title} placeholder='optional' id='newTask' type="text" />
                    <label htmlFor="text">new task</label>
                    <input onChange={handleChange}
                        value={editTask.detail[0] ? (editTask.detail[0].point) : (null)}
                        placeholder='optional' id='pointOne' type="text" />
                    <label htmlFor="text">point one</label>
                    <input onChange={handleChange}
                        value={editTask.detail[1] ? (editTask.detail[1].point) : (null)}
                        placeholder='optional' id='pointTwo' type="text" />
                    <label htmlFor="text">point two</label>
                    <input onChange={handleChange}
                        value={editTask.detail[2] ? (editTask.detail[2].point) : (null)}
                        placeholder='optional' id='pointThree' type="text" />
                    <label htmlFor="text">point three</label>
                    <select id='selectColor' onChange={handleChange}>
                        <option value="yellow">Miscelanneus-yellow</option>
                        <option value="green">Personal-green</option>
                        <option value="red">Urgent!-red</option>
                        <option value="blue">Work-blue</option>
                        <option value="purple">Family-purple</option>
                    </select>
                    <DatePicker
                        selected={startDate}
                        onChange={date => handleDate(date)}
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        showTimeInput
                        placeholderText="Click to select a date"
                    />
                    <button>EDIT</button>
                </form >
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
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