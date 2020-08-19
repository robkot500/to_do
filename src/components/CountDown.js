import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

function CountDown(props) {

    const newCountDown = props.items.todos.filter(each => {
        return props.items.selectedItem.id === each.id
    })
    console.log(newCountDown);
    const alarmDate = newCountDown[0].date;
    const [countDownDate, setCountDownDate] = useState(alarmDate)

    useEffect(() => {
        const int = setInterval(function () {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            console.log(days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ")
            if (distance < 0 && newCountDown[0].date - new Date() <= 1500 && newCountDown[0].date - new Date() >= -1500) {
                props.alarmOn(newCountDown[0].id)
                setTimeout(function () { props.alarmOff(newCountDown[0].id) }, 10000);
                clearInterval(int);
            }
            const offAlarm = props.items.todos.filter(each => { return each.id === newCountDown[0].id })

            if (newCountDown[0].alarm.iconOn === false) { clearInterval(int) }

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
    console.log(state);
    return {
        items: state.item,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        alarmOn: (id) => { dispatch({ type: 'ALARM_ON', id: id }) },
        alarmOff: (id) => { dispatch({ type: 'ALARM_OFF', id: id }) },


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountDown)
