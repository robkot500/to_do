import React from 'react'
import { connect } from 'react-redux'

function Task(props) {
    console.log(props);
    // console.log(props.items.items[0].detail.pointOne);
    const itemDetail = props.items.items.filter(each => {
        return each.id === props.items.selectedItem.id
    })
    const clickDelete = (id) => {
        props.deleteItem(id)
    }
    const [details] = itemDetail
    console.log(itemDetail.length);
    console.log(itemDetail);
    if (itemDetail.length < 1) {
        console.log('lelelelle');
        return (
            <p>You have no todos left</p>
        )
    }
    return (
        <div className='task-container'>
            <div className='title'>
                <div className='title-wrapper'>
                    <input type="checkbox" id="todo" name="todo" value="todo" />
                    <label htmlFor="todo" data-content={details.title}>{details.title}</label>
                </div>
                <i onClick={() => { clickDelete(details.id) }} className="fas fa-trash-alt"></i>
            </div>
            <div className='points'></div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.item
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => { dispatch({ type: 'DELETE', id: id }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Task)
