import React, { useState } from 'react'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

function Add(props) {
    console.log(props.add.item.todos[0].edit);
    console.log(props);
    const [startDate, setStartDate] = useState(null);

    let n = 5;
    const [newTask, setNewTask] = useState({
        title: null,
        titleMarked: false,
        id: null,
        date: null,
        detail: [
            { point: null, pointMarked: false },
            { point: null, pointMarked: false },
            { point: null, pointMarked: false }
        ]
    })
    const filterToEdit = props.add.item.todos.filter(each => {
        return each.edit != false
    })
    console.log(filterToEdit.length);

    const mouseEnter = (e) => {
        e.target.value = null
        // props.changeDetail(id)
    }
    console.log(n);
    const handleChange = (e) => {
        console.log('loop111111');
        if (e.target.id === 'newTask') {
            newTask.title = e.target.value
        } if (e.target.id === 'pointOne') {
            newTask.detail[0] = { point: e.target.value, pointMarked: false }
        } if (e.target.id === 'pointTwo') {
            newTask.detail[1] = { point: e.target.value, pointMarked: false }
        } if (e.target.id === 'pointThree') {
            newTask.detail[2] = { point: e.target.value, pointMarked: false }
        }
        newTask.id = new Date().getTime()

    }
    console.log(newTask.id);

    const handleSubmit = (e, id) => {
        e.preventDefault()
        newTask.date = startDate
        props.addNewTask(newTask)
        props.displayDetail(newTask.id)
        props.display('task')
        console.log(startDate);

    }
    const handleDate = (date) => {
        setStartDate(date)
    }
    const itemDetailEdit = props.add.item.todos.filter(each => {
        console.log(each);
        // return each.id === props.items.selectedItem.id
    })

    return (
        <>
            <form onSubmit={handleSubmit} type='submit'>
                <input onChange={handleChange} onMouseDown={mouseEnter} onfocus="value=''" value={filterToEdit.length < 1 ? (newTask.title) : (filterToEdit[0].title)} id='newTask' type="text" />
                <label htmlFor="text">new task</label>
                <input onChange={handleChange} onMouseDown={mouseEnter} value={filterToEdit.length < 1 ? (newTask.detail[0]) : (filterToEdit[0].detail[0].point)} placeholder='optional' id='pointOne' type="text" />
                <label htmlFor="text">point one</label>
                <input onChange={handleChange} onMouseDown={mouseEnter} value={filterToEdit.length < 1 ? (newTask.detail[0]) : (filterToEdit[0].detail[1].point)} placeholder='optional' id='pointTwo' type="text" />
                <label htmlFor="text">point two</label>
                <input onChange={handleChange} onMouseDown={mouseEnter} value={filterToEdit.length < 1 ? (newTask.detail[0]) : (filterToEdit[0].detail[2].point)} placeholder='optional' id='pointThree' type="text" />
                <label htmlFor="text">point three</label>
                <DatePicker
                    selected={startDate}
                    onChange={date => handleDate(date)}
                    // onMouseDown={mouseEnter}
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                    placeholderText="Click to select a date"
                />
                <button>ADD</button>
            </form >
        </>
    )
}
const mapStateToProps = (addNewTask) => {
    return {
        add: addNewTask
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewTask: (newTask) => { dispatch({ type: 'ADD_NEW_TASK', newTask: newTask }) },
        displayDetail: (id) => { dispatch({ type: 'DISPLAY_DETAIL', id: id }) },
        display: (id) => { dispatch({ type: 'DISPLAY', id: id }) },
        // changeDetail: (id) => { dispatch({ type: 'CHANGE_DETAIL', id: id }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
