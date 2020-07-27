import React from 'react'
import { connect } from 'react-redux'

function Task(props) {
    console.log(props);
    const itemDetail = props.items.todos.filter(each => {
        return each.id === props.items.selectedItem.id
    })
    const clickDelete = (id) => {
        props.deleteItem(id)
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
    console.log(itemDetail);
    const alldetails = details.detail.map(each => {
        console.log(each);
        return (
            <p key={each.point}>{each.point}</p>
        )
    })
    return (
        <div className='task-container'>
            <div className='title'>
                <div className='title-wrapper'>
                    <input type="checkbox" id="todo" name="todo" value="todo" />
                    <label htmlFor="todo" data-content={details.title}>{details.title}</label>
                </div>
                <i onClick={() => { clickDelete(details.id) }} className="fas fa-trash-alt"></i>
            </div>

            {alldetails}

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
