import React from 'react'
import { connect } from 'react-redux'

function Points(props) {
    console.log(props.items.todos[0].id);
    return (
        <div>
            <input id={props.items.todos[0].id} type="checkbox" />
            <label htmlFor={props.items.todos[0].id}>{props.items.todos[0].detail[0].point}</label>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.item
    }
}
export default connect(mapStateToProps)(Points)
