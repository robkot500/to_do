import React from 'react'
import { connect } from 'react-redux'

function List(props) {
    console.log(props.items.todos);
    const sortItems = (a, b) => a.id - b.id;
    const sort = props.items.todos.sort(sortItems)
    console.log(sort);
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
    // let style
    if (props.items.todos.length < 1) {
        return (
            <div className='title'>
                <div className='title-wrapper'>
                    <p>You have no todos left</p>
                </div>
            </div>
        )
    }
    const display = props.items.todos.map(task => {
        // if (task.flag === 'green') {
        //     style = { color: 'green' }
        // } if (task.flag === 'yellow') {
        //     style = { color: 'yellow' }
        // }
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
                    <i class="fas fa-bell"></i>
                    {/* <div className="deadline">{task.date.toLocaleTimeString([], { timeStyle: 'short' })}, {task.date.toLocaleDateString()}</div> */}
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
        </div >
    )
}

const mapStateToProps = (state, deleteItem) => {
    console.log('liiii', state);

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
        changeTitleList: (each) => { dispatch({ type: 'CHANGE_TITLE_LIST', each: each }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
