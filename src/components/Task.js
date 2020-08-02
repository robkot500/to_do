import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Points from './Points'
import alarm from './../assets/alarm.mp3'
import Play from './Play'



function Task(props) {

    console.log(props.setDate);
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
    const itemDetail = props.items.todos.filter(each => {
        return each.id === props.items.selectedItem.id
    })

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
                {/* <div>{props.setDate != null ? (props.setDate.toLocaleString()) : (new Date().toLocaleString)}</div> */}
                {/* <div>{
                    console.log(itemDetail[0].date),
                    itemDetail[0].date.toLocaleString()}</div> */}
                <div>{itemDetail[0].date.toLocaleDateString()}</div>
                <div>{itemDetail[0].date.toLocaleTimeString()}</div>



            </div>

        </>
    )
}
const mapStateToProps = (state) => {
    console.log(state.position.date);
    return {
        items: state.item,
        setDate: state.position.date
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => { dispatch({ type: 'DELETE', id: id }) },
        pointCheck: (id) => { dispatch({ type: 'CHANGE_CHECK', id: id }) },
        titleCheckTask: (each) => { dispatch({ type: 'CHANGE_TITLE_TASK', each: each }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Task)
