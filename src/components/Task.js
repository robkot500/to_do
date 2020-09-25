import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Points from './Points'
// import alarm from './../assets/alarm.mp3'
import CountDown from './CountDown'



function Task(props) {
    const clickDelete = (id) => {
        props.deleteItem(id)
    }
    const handlePoint = (id) => {
        props.pointCheck(id)
    }
    const handleTitle = (each) => {
        props.titleCheckTask(each)
    }
    const itemDetail = props.items.todos.filter(each => {
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
        props.clickToEditTask(item)
    }

    const [details] = itemDetail
    if (itemDetail.length < 1) {
        return (
            <div className='no-todos-container'>
                <p className='no-todos'>You have no todos left</p>
                <div className='leisure'></div>
            </div>
        )
    }
    console.log(itemDetail[0].flag);
    let styleFlag
    let flagText
    if (itemDetail[0].flag === 'high') { styleFlag = '#5B63B6'; flagText = 'high priority' }
    if (itemDetail[0].flag === 'medium') { styleFlag = '#7B89F2'; flagText = 'medium priority' }
    if (itemDetail[0].flag === 'low') { styleFlag = '#BCC5FF'; flagText = 'low priority' }


    const alldetails = details.detail.map(each => {
        if (each.point != null)
            return (
                <div className='task-point' key={each.point}>
                    <input onClick={(id) => { handlePoint(each.point) }} className='point-check' id={each.point} type="checkbox" checked={each.pointMarked} />
                    <label className='point-label' htmlFor={each.point}>{each.point}</label>
                </div>
            )
    })

    return (
        <>
            <div className='task-container'>
                <div className="title-points-box">
                    <div className='title-trash-box'>
                        <div className='title-wrapper'>
                            <input onClick={(id) => { handleTitle(itemDetail[0]) }} className='title-check' id={itemDetail[0].title} type="checkbox" checked={itemDetail[0].titleMarked} />
                            <label onClick={(id) => { handleTitle(itemDetail[0]) }} className='title-label' htmlFor="todo" data-content={details.title}>{details.title}</label>
                        </div>
                        {/* <i onClick={() => { clickDelete(details.id) }} className="fas fa-trash-alt"></i> */}
                    </div>
                    {alldetails}
                    <div class="title-points-buttons">
                        <div classname="button-edit"><i onClick={() => { clickEdit(itemDetail[0].id, 'edit') }} class="fas fa-edit"></i>EDIT</div>
                        <div className="button-trash"><i onClick={() => { clickDelete(details.id) }} class="fas fa-trash-alt"></i>DELETE</div>
                    </div>
                </div>
                {/* <div className="task-line"></div> */}
                <div className='flag-date-box'>
                    <div className="task-flag"><i class="fas fa-flag" style={{ color: styleFlag }}></i>{flagText}</div>
                    <div className='task-date'><i class="fas fa-calendar-check"></i>{itemDetail[0].date != null ? (itemDetail[0].date.toLocaleDateString()) : ('date not set')}</div>
                    <div className='task-count'><i class="fas fa-stopwatch"></i>{itemDetail[0].countDown}</div>
                </div>

                <div className="task-notes-wrapper"><div className='task-notes'>{itemDetail[0].notes}</div></div>

                <button onClick={() => { clickEdit(itemDetail[0].id, 'edit') }}>EDIT</button>
                <CountDown />
            </div>

        </>
    )
}
const mapStateToProps = (state) => {
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
        clickToEditTask: (id) => { dispatch({ type: 'CLICK_TO_EDIT_TASK', id: id }) },
        editTaskState: () => { dispatch({ type: 'EDIT_TASK_STATE' }) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Task)
