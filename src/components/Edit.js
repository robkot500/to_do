import React, { useState } from 'react'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

function Edit(props) {
    console.log(props);
    const toEdit = props.add.item.todos.filter(each => {
        return each.edit === true
    })
    let initDate
    if (toEdit.length > 0) { initDate = toEdit[0].date }
    else { initDate = props.add.item.todos[0].date }
    let initState
    if (toEdit.length > 0) { initState = toEdit[0] }
    else { initState = props.add.item.todos[0] }
    const [startDate, setStartDate] = useState(initDate);
    const [editTask, setEditTask] = useState(initState)



    const handleDate = (date) => {
        setStartDate(date)
        editTask.date = date
        console.log(date)
        console.log(editTask.date)
        console.log(startDate)
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
        }
        if (e.target.id === 'pointTwo') {
            setEditTask({
                ...editTask, detail: editTask.detail.map(each => { if (each !== editTask.detail[1]) return each; return { ...each, point: e.target.value } }
                )
            })
        }
        if (e.target.id === 'pointThree') {
            setEditTask({
                ...editTask, detail: editTask.detail.map(each => {
                    if (each !== editTask.detail[2]) return each; return { ...each, point: e.target.value }
                })
            })
            let newPoint
            if (editTask.detail[2] == undefined && e.target.value.length > 0) {
                console.log('sssssssssssssssssss')
                editTask.detail[2] = { point: e.target.value, pointMarked: false }
                newPoint = { point: e.target.value, pointMarked: false }
                setEditTask({
                    ...editTask, detail: editTask.detail.map(each => {
                        if (2 + 2 === 4) return each; return { ...each, newPoint }
                    })
                })


            }

        }
    }

    const checkPoints = editTask.detail.filter(each => each.point.length > 0)
    console.log(checkPoints);



    const handleSubmit = (e, id) => {
        e.preventDefault()
        // setEditTask({ ...editTask, detail: checkPoints })
        // setEditTask({ ...editTask, date: startDate })
        console.log(editTask.detail);
        // editTask.date = startDate
        props.editTask(editTask)
        props.addAfterEdit(editTask)
        props.displayDetail(editTask.id)
        props.display('task')



    }
    // editTask.detail[2].point ? (null) : (setEditTask({...editTask,point:}));


    return (
        <>
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
                {/* {editTask.detail[2].point ? (< input onChange={handleChange}
                    value={editTask.detail[2] ? (editTask.detail[2].point) : (null)}
                    placeholder='optional' id='pointThree' type="text" />) : (null)} */}
                <input onChange={handleChange}
                    value={editTask.detail[2] ? (editTask.detail[2].point) : (null)}
                    placeholder='optional' id='pointThree' type="text" />
                <label htmlFor="text">point three</label>
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