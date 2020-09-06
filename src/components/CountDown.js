import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

function CountDown(props) {


    let newCountDown = props.items.todos.filter(each => { return each.id === props.alarmId })
    !newCountDown[0] ? (newCountDown = props.items.todos) : (console.log());

    const [countDownDate, setCountDownDate] = useState(newCountDown[0].date)
    const alarmTime = props.items.todos.filter(each => { return each.alarm.setAlarm != null })
    useEffect(() => {
        const int = setInterval(function () {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // console.log(days + "d " + hours + "h "
            //     + minutes + "m " + seconds + "s ")
            const dayHourMinSec = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s "
            props.countDown(props.alarmId, dayHourMinSec)

            // alarmTime[0] ? (alarmTime[0].alarm.setAlarm - now < 0 ? (props.alarmOn(newCountDown[0].id)) : (console.log())) : (console.log())
            if (alarmTime[0] && alarmTime[0].alarm.setAlarm - now < 0) {
                props.alarmOn(newCountDown[0].id);
                setTimeout(() => { props.alarmOff(newCountDown[0].id) }, 10000);
            }
            if (distance < 0 && newCountDown[0].date - new Date() <= 1500 && newCountDown[0].date - new Date() >= -1500) {
                props.alarmOn(newCountDown[0].id)
                setTimeout(() => { props.alarmOff(newCountDown[0].id) }, 10000);
                clearInterval(int);
            }

            const offAlarm = props.items.todos.filter(each => { return each.id === newCountDown[0].id })

            // if (newCountDown[0].alarm.iconOn === false) { clearInterval(int) }

        }, 1000);

        return () => {
            clearInterval(int)
        }
    }, [newCountDown[0].alarm.iconOn]);



    return (
        <></>
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.item,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        alarmOn: (id) => { dispatch({ type: 'ALARM_ON', id: id }) },
        alarmOff: (id) => { dispatch({ type: 'ALARM_OFF', id: id }) },
        countDown: (id, count) => { dispatch({ type: 'COUNT_DOWN', id: id, count: count }) }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountDown)
