import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Points from './Points'
import alarm from './../assets/alarm.mp3'
import Play from './Play'



function Task(props) {
    console.log(props);
    const clickDelete = (id) => {
        props.deleteItem(id)
    }
    const handlePoint = (id) => {
        props.pointCheck(id)
    }
    const handleTitle = (each) => {
        console.log(each);
        props.titleCheckTask(each)
    }
    console.log(props.items);
    const itemDetail = props.items.todos.filter(each => {
        console.log(props.items.selectedItem);
        console.log(props.items.selectedItem.id);
        return each.id === props.items.selectedItem.id
    })
    const editTrue = props.items.todos.filter(each => {
        return each.edit === true
    })

    useEffect(() => {
        editBack()
    }, []);
    const editBack = () => {
        props.editTaskState()
    }
    const clickEdit = (item, id) => {
        props.display(item, id)
        props.editTask(item)
    }

    const [details] = itemDetail
    if (itemDetail.length < 1) {
        return (
            <div className='title'>
                <div className='title-wrapper'>
                    <p>You have no todos left</p>
                </div>
            </div>
        )
    }
    console.log(details.detail);
    const alldetails = details.detail.map(each => {
        if (each.point != null)
            return (
                <div key={each.point}>
                    <input onClick={(id) => { handlePoint(each.point) }} className='point-check' id={each.point} type="checkbox" checked={each.pointMarked} />
                    <label className='point-label' htmlFor={each.point}>{each.point}</label>
                </div>
            )
    })

    return (
        <>
            <div className='task-container'>
                <div className='title'>
                    <div className='title-wrapper'>
                        <input onClick={(id) => { handleTitle(itemDetail[0]) }} className='title-check' id={itemDetail[0].title} type="checkbox" checked={itemDetail[0].titleMarked} />
                        <label onClick={(id) => { handleTitle(itemDetail[0]) }} className='title-label' htmlFor="todo" data-content={details.title}>{details.title}</label>
                    </div>
                    <i onClick={() => { clickDelete(details.id) }} className="fas fa-trash-alt"></i>
                </div>
                {alldetails}
                <div>{itemDetail[0].date != null ? (itemDetail[0].date.toLocaleDateString()) : (null)}</div>
                <button onClick={() => { clickEdit(itemDetail[0].id, 'edit') }}>EDIT</button>
            </div>

        </>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        items: state.item,
        position: state.position
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => { dispatch({ type: 'DELETE', id: id }) },
        pointCheck: (id) => { dispatch({ type: 'CHANGE_CHECK', id: id }) },
        titleCheckTask: (each) => { dispatch({ type: 'CHANGE_TITLE_TASK', each: each }) },
        display: (task, id) => { dispatch({ type: 'DISPLAY', task: task, id: id }) },
        editTask: (id) => { dispatch({ type: 'EDIT_TASK', id: id }) },
        editTaskState: () => { dispatch({ type: 'EDIT_TASK_STATE' }) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Task)
