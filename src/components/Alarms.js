import React from 'react'
import { connect } from 'react-redux'
import CountDown from './CountDown';


function Alarms(props) {
    const alarms = props.items.todos.filter(each => {
        return each.alarm.setAlarm != null
    })
    console.log(alarms);
    const display = props.items.todos.map(each => {
        console.log(each);
        return (
            <>
                {/* <CountDown alarmId={each.id} /> */}
            </>
        )
    })
    return (
        <>
            {display}
        </>
    )

}
const mapStateToProps = (state, deleteItem) => {
    return {
        items: state.item,
        // position: state.position
    }
}
export default connect(mapStateToProps)(Alarms)
