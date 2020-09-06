import React from 'react'
import { connect } from 'react-redux'
import CountDown from './CountDown'

function List(props) {
    // console.log(props);
    const sortItems = (a, b) => a.id - b.id;
    const sort = props.items.todos.sort(sortItems)
    const clickDelete = (id) => {
        props.deleteItem(id)
    }
    const clickDetail = (item, id) => {
        if (item === 'task') {
            props.displayTask(item);
        }
        props.displayDetail(id)
    }
    const handleTitle = (each) => {
        props.changeTitleList(each)
    }
    const flag = props.items.todos.map(each => {
    })

    if (props.items.todos.length < 1) {
        return (
            <div className='no-todos-container'>
                <p className='no-todos'>You have no todos left</p>
                <div className='leisure'></div>
            </div>
        )
    }
    const bell = props.items.todos.map(each => {
        if (each.iconOn === true) {
            return (
                <i class="fas fa-bell"></i>
            )
        } else {
            return (
                <i class="fas fa-bell-slash"></i>
            )
        }
    })
    const handleAlarmOff = (id) => {
        props.alarmOff(id)
    }
    const display = props.items.todos.map(task => {

        return (
            <div key={task.id} className='item'>
                <div className='title'>
                    <div className='title-wrapper'>
                        <input onClick={(id) => { handleTitle(task) }} className='title-check' id={task.title} type="checkbox" checked={task.titleMarked} />
                        <label onClick={(id) => { handleTitle(task) }} className='title-label' htmlFor="todo" data-content={task.title}>{task.title}</label>
                    </div>
                </div>
                <div className='detail'>
                    <div className="flag"><i class="fas fa-flag" style={{ color: task.flag }}></i></div>
                    <div className="bell">{task.alarm.iconOn === true ? (<i class="fas fa-bell" onClick={() => { handleAlarmOff(task.id) }}></i>) : (<i class="far fa-bell"></i>)}</div>
                    <div className='deadline'>{task.date ? (task.date.toLocaleTimeString([], { timeStyle: 'short' })) : ('date not set')}, {task.date ? (task.date.toLocaleDateString()) : (null)}</div>
                    <div onClick={() => { clickDetail('task', task.id) }} className="check-detail">DETAILS</div>
                    <i onClick={() => { clickDelete(task.id) }} className="fas fa-trash-alt"></i>
                </div>
            </div >
        )
    })
    return (
        <div className='list-container'>
            {display}
            <div class="leisure-container">
                <div class="list-leisure"></div>
            </div>

        </div >
    )
}

const mapStateToProps = (state, deleteItem) => {
    return {
        items: state.item,
        position: state.position
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => { dispatch({ type: 'DELETE', id: id }) },
        displayTask: (task) => { dispatch({ type: 'DISPLAY_TASK', task: task }) },
        displayDetail: (id) => { dispatch({ type: 'DISPLAY_DETAIL', id: id }) },
        changeTitleList: (each) => { dispatch({ type: 'CHANGE_TITLE_LIST', each: each }) },
        alarmOff: (id) => { dispatch({ type: 'ALARM_OFF', id: id }) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
