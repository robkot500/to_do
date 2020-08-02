import React, { useState } from 'react'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

function Add(props) {
    console.log(props);
    const [startDate, setStartDate] = useState(new Date());
    let newTask = {
        title: null,
        titleMarked: false,
        id: null,
        date: startDate,
        detail: [
            { point: null, pointMarked: false },
            { point: null, pointMarked: false },
            { point: null, pointMarked: false }
        ]
    }

    console.log(newTask);
    const handleChange = (e) => {
        if (e.target.id === 'newTask') {
            newTask.title = e.target.value
            console.log(e.target.value);
            console.log(newTask.title);
        } if (e.target.id === 'pointOne') {
            newTask.detail[0] = { point: e.target.value, pointMarked: false }
            console.log(e.target.value);
            console.log(newTask.detail);
        } if (e.target.id === 'pointTwo') {
            newTask.detail[1] = { point: e.target.value, pointMarked: false }
        } if (e.target.id === 'pointThree') {
            newTask.detail[2] = { point: e.target.value, pointMarked: false }

        }
        newTask.id = new Date().getTime()

        // newTask = { ...newTask, [newTask.detail.point]: e.target.value, pointMarked: false }
    }
    console.log(newTask);
    const handleSubmit = (e, id) => {
        e.preventDefault()
        props.addNewTask(newTask)
        console.log(newTask.id);
        props.displayDetail(newTask.id)
        props.display('task')

    }
    const handleDate = (date) => {
        // console.log(date.toLocalString())
        // setStartDate(date)
        props.addSetDate(date)
        return date
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
                <DatePicker
                    // selected={new Date()}
                    selected={startDate}

                    // onChange={date => setStartDate(date)}
                    onChange={date => handleDate(date),
                        date => setStartDate(date)
                    }
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                    placeholderText="Click to select a date"
                />
                <button>ADD</button>
            </form >
            {/* <Alarm /> */}
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
        display: (id) => { dispatch({ type: 'DISPLAY', id: id }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
