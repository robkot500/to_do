import React, { useState } from 'react'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function Add(props) {
    console.log(props);
    console.log(props.add.item.todos);

    const initTask = {
        title: null,
        titleMarked: false,
        id: null,
        date: null,
        edit: false,
        flag: 'yellow',
        alarm: {
            setAlarm: null,
            isAlarm: false,
            iconOn: false
        },
        detail: [
            { point: null, pointMarked: false },
            { point: null, pointMarked: false },
            { point: null, pointMarked: false }
        ]
    }

    const [startDate, setStartDate] = useState(null);
    const [newTask, setNewTask] = useState(initTask)


    const handleChange = (e) => {
        if (e.target.id === 'newTask') {
            newTask.title = e.target.value
            console.log(newTask.title);
        } if (e.target.id === 'pointOne') {
            // newTask.detail[0] = { point: e.target.value, pointMarked: false }
            setNewTask({
                ...newTask, detail: newTask.detail.map(each => {
                    if (each != newTask.detail[0]) return each; return { point: e.target.value, pointMarked: false }
                })
            })
        } if (e.target.id === 'pointTwo') {
            // newTask.detail[1] = { point: e.target.value, pointMarked: false } 
            setNewTask({
                ...newTask, detail: newTask.detail.map(each => {
                    if (each != newTask.detail[1]) return each; return { point: e.target.value, pointMarked: false }
                })
            })
        } if (e.target.id === 'pointThree') {
            // newTask.detail[2] = { point: e.target.value, pointMarked: false }
            setNewTask({
                ...newTask, detail: newTask.detail.map(each => {
                    if (each != newTask.detail[2]) return each; return { point: e.target.value, pointMarked: false }
                })
            })
        } if (e.target.id === 'selectColor') { setNewTask({ ...newTask, flag: e.target.value }) }
        if (e.target.id === 'notes') {
            setNewTask({ ...newTask, notes: e.target.value })
        } if (e.target.id === 'alarm') {
            console.log('alarm', e.target.value);
            newTask.alarm.setAlarm = e.target.value
            console.log(newTask.alarm.setAlarm);
            newTask.alarm.iconOn = true
        }

        newTask.id = new Date().getTime()

    }



    const handleSubmit = (e, id) => {
        e.preventDefault()
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', newTask.alarm.iconOn);
        newTask.date = startDate
        props.displayDetail(newTask.id)
        props.addNewTask(newTask)
        props.display('task')



    }
    const handleDate = (date) => {
        setStartDate(date)
    }


    return (
        <>
            <form onSubmit={handleSubmit} type='submit'>
                <input onChange={handleChange} id='newTask' type="text" />
                <label htmlFor="text">new task</label>
                <input onChange={handleChange} placeholder='optional' id='pointOne' type="text" />
                <label htmlFor="text">point one</label>
                <input onChange={handleChange} placeholder='optional' id='pointTwo' type="text" />
                <label htmlFor="text">point two</label>
                <input onChange={handleChange} placeholder='optional' id='pointThree' type="text" />
                <label htmlFor="text">point three</label>
                <select id='selectColor' onChange={handleChange}>
                    <option value="orange">Miscelanneus-orange</option>
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
                <select id='alarm' onChange={handleChange}>
                    <option value={null}>---</option>
                    <option value={startDate}>date</option>
                    <option value={startDate - (60 * 60 * 1000)}>one hour before</option>
                    <option value={startDate - (30 * 60 * 1000)}>half an hour before</option>
                    <option value="blue">Work-blue</option>
                    <option value="purple">Family-purple</option>
                </select>
                <textarea onChange={handleChange} name="notes" id="notes" cols="35" rows="10"></textarea>
                <button>ADD</button>
            </form >
        </>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        add: state,
        position: state.position
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewTask: (newTask) => { dispatch({ type: 'ADD_NEW_TASK', newTask: newTask }) },
        displayDetail: (id) => { dispatch({ type: 'DISPLAY_DETAIL', id: id }) },
        display: (id) => { dispatch({ type: 'DISPLAY', id: id }) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
