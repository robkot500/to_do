import React, { useState } from 'react'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Popup from "reactjs-popup";
import Modal from './Modal'

function Add(props) {

    const initTask = {
        title: null,
        titleMarked: false,
        id: null,
        edit: false,
        flag: 'yellow',
        date: null,
        countDown: null,
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
            setNewTask({
                ...newTask, detail: newTask.detail.map(each => {
                    if (each != newTask.detail[0]) return each; return { point: e.target.value, pointMarked: false }
                })
            })
        } if (e.target.id === 'pointTwo') {
            setNewTask({
                ...newTask, detail: newTask.detail.map(each => {
                    if (each != newTask.detail[1]) return each; return { point: e.target.value, pointMarked: false }
                })
            })
        } if (e.target.id === 'pointThree') {
            setNewTask({
                ...newTask, detail: newTask.detail.map(each => {
                    if (each != newTask.detail[2]) return each; return { point: e.target.value, pointMarked: false }
                })
            })
        } if (e.target.id === 'selectColor') { setNewTask({ ...newTask, flag: e.target.value }) }
        if (e.target.id === 'notes') {
            setNewTask({ ...newTask, notes: e.target.value })
        } if (e.target.id === 'alarm') {
            // setNewTask({
            //     ...newTask, alarm: { setAlarm: e.target.value, isAlarm: false, iconOn: true }
            // })
            // newTask.alarm.setAlarm = null
            newTask.alarm.setAlarm = e.target.value
            newTask.alarm.iconOn = true
        }
        setNewTask({
            ...newTask, id: new Date().getTime()
        })

    }



    const handleSubmit = (e, id) => {
        e.preventDefault()
        newTask.date = startDate
        props.displayDetail(newTask.id)
        props.addNewTask(newTask)
        props.display('task')



    }
    const handleDate = (date) => {
        setStartDate(date)
    }
    const handleModal = () => { }

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
                    <option value={startDate}>todo time</option>
                    <option value={startDate - 60000}>half an hour before</option>
                    <option value={startDate - 120000}>an hour before</option>
                </select>
                <Modal handleModal={handleModal()} />
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
