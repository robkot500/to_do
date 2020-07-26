import React from 'react'
import { connect } from 'react-redux'

function Task(props) {
    console.log(props);
    // console.log(props.items.todos[0].detail.pointOne);
    const itemDetail = props.items.todos.filter(each => {
        return each.id === props.items.selectedItem.id
    })
    const clickDelete = (id) => {
        props.deleteItem(id)
    }
    const [details] = itemDetail
    console.log(details);
    if (itemDetail.length < 1) {
        console.log('lelelelle');
        return (
            <div className='title'>
                <div className='title-wrapper'>
                    <p>You have no todos left</p>
                </div>
            </div>
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

            <p>{details.detail.pointOne}</p>

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
