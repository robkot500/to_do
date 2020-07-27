import React from 'react'
import { connect } from 'react-redux'

function Add(props) {
    console.log(props);
    let newTask = {
        title: null,
        id: null,
        detail: [
            { point: null },
            { point: null },
            { point: null }
        ]
    }

    console.log(newTask);
    const handleChange = (e) => {
        if (e.target.id === 'newTask') {
            newTask.title = e.target.value
            console.log(e.target.value);
            console.log(newTask.title);
        } if (e.target.id === 'pointOne') {
            newTask.detail[0] = { point: e.target.value }
            console.log(e.target.value);
            console.log(newTask.detail);
        } if (e.target.id === 'pointTwo') {
            newTask.detail[1] = { point: e.target.value }
        } if (e.target.id === 'pointThree') {
            newTask.detail[2] = { point: e.target.value }
        }
        newTask.id = new Date().getTime()
        console.log(newTask.detail);
        // newTask = { ...newTask, [newTask.detail.point]: e.target.value }
    }
    const handleSubmit = (e, id) => {
        e.preventDefault()
        props.addNewTask(newTask)
        console.log(newTask.id);
        props.displayDetail(newTask.id)
        props.display('task')

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
        display: (id) => { dispatch({ type: 'DISPLAY', id: id }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
