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
    const itemDetail = props.items.todos.filter(each => {
        return each.id === props.items.selectedItem.id
    })

    const [details] = itemDetail
    console.log(itemDetail[0]);
    console.log(itemDetail[0].titleMarked);
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
        const pointcheck = each.pointMarked === true ?
            (<input onClick={(id) => { handlePoint(each.point) }} className='point-check' id={each.point} type="checkbox" checked />) :
            (<input onClick={(id) => { handlePoint(each.point) }} className='point-check' id={each.point} type="checkbox" />)
        return (
            <div key={each.point}>
                {pointcheck}
                <label className='point-label' htmlFor={each.point}>{each.point}</label>
            </div>
        )
    })
    const allTitles = itemDetail.map(each => {
        console.log(each);
        const titleCheck = each.titleMarked === true ?

            (<input onClick={(id) => { handleTitle(each) }} className='title-check' id={each.title} type="checkbox" checked />) :
            (<input onClick={(id) => { handleTitle(each) }} className='title-check' id={each.title} type="checkbox" />)
        return (
            <>
                {titleCheck}
                <label onClick={(id) => { handleTitle(each) }} className='title-label' htmlFor="todo" data-content={details.title}>{details.title}</label>
            </>
        )
    })
    return (
        <>
            <div className='task-container'>
                <div className='title'>
                    <div className='title-wrapper'>
                        {/* <input className='title-check' type="checkbox" id="todo" name="todo" value="todo" />
                        <label className='title-label' htmlFor="todo" data-content={details.title}>{details.title}</label> */}
                        {
                            itemDetail[0].titleMarked === true ?
                                (console.log('11111111aaaaaa'),
                                    <input onClick={(id) => { handleTitle(itemDetail[0]) }} className='title-check' id={itemDetail[0].title} type="checkbox" checked />) :
                                (console.log('111bbbbbbbb'), <input onClick={(id) => { handleTitle(itemDetail[0]) }} className='title-check' id={itemDetail[0].title} type="checkbox" />)
                        }
                        <label onClick={(id) => { handleTitle(itemDetail[0]) }} className='title-label' htmlFor="todo" data-content={details.title}>{details.title}</label>
                        {/* {allTitles} */}
                    </div>
                    <i onClick={() => { clickDelete(details.id) }} className="fas fa-trash-alt"></i>
                </div>
                {alldetails}
            </div>

        </>
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.item
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
