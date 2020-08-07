import React from 'react'
import { connect } from 'react-redux'

function List(props) {
    console.log(props);
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

        return (
            <div key={task.id} className='item'>
                <div className='title'>
                    <div className='title-wrapper'>
                        <input onClick={(id) => { handleTitle(task) }} className='title-check' id={task.title} type="checkbox" checked={task.titleMarked} />
                        <label onClick={(id) => { handleTitle(task) }} className='title-label' htmlFor="todo" data-content={task.title}>{task.title}</label>
                    </div>
                    <i onClick={() => { clickDelete(task.id) }} className="fas fa-trash-alt"></i>
                </div>
                <div className='detail'>
                    <div onClick={() => { clickDetail('task', task.id) }} className="check-detail">DETAIL</div>
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
