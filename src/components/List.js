import React from 'react'
import { connect } from 'react-redux'

function List(props) {
    console.log(props);
    const clickDelete = (id) => {

        props.deleteItem(id)
    }
    const clickDetail = (item, id) => {
        console.log('aaaa', id);
        if (item === 'task') {
            props.displayTask(item);
        }
        props.displayDetail(id)
    }


    const display = props.items.todos.map(task => {
        console.log(task.selected);
        return (
            <div key={task.id} className='item'>
                <div className='title'>
                    <div className='title-wrapper'>
                        {/* <input type="checkbox" id="todo" name="todo" value="todo" />
                        <label htmlFor="todo" data-content={task.title}>{task.title}</label> */}
                        <input id={task.id} type="checkbox" />
                        <label for={task.id}>{task.title}</label>
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
    console.log('liiii', deleteItem);

    return {
        items: state.item,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => { dispatch({ type: 'DELETE', id: id }) },
        displayTask: (task) => { dispatch({ type: 'DISPLAY_TASK', task: task }) },
        displayDetail: (id) => { dispatch({ type: 'DISPLAY_DETAIL', id: id }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
