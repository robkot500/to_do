import React from 'react'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';
import Play from './Play';

function CountDown(props) {
    console.log(props.items.todos);

    const newCountDown = props.items.todos.filter(each => {
        return props.items.selectedItem.id === each.id
    })
    console.log(newCountDown[0].alarm.iconOn);
    const date = newCountDown[0].date;

    const [countDownDate, setCountDownDate] = useState(date)
    // var countDownDate = new Date("Aug 17, 2020 16:40:25").getTime();

    // const countDownDate = newCountDown[0].date;

    console.log(countDownDate);
    // Update the count down every 1 second
    useEffect(() => {
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            console.log(days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ")

            if (distance < 0) {
                console.log(newCountDown[0].id);
                props.alarmOn(newCountDown[0].id)
                setTimeout(function () { props.alarmOff(newCountDown[0].id) }, 5000);
                clearInterval(x);
            }
            const offAlarm = props.items.todos.filter(each => { return each.id === newCountDown[0].id })
            console.log(newCountDown[0].alarm.iconOn);

            if (newCountDown[0].alarm.iconOn === false) { console.log('ccccccccccccccccccccccccc'); clearInterval(x); }
        }, 1000);
    }, []);



    return (
        <div>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        items: state.item,
        // position: state.position
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        alarmOn: (id) => { dispatch({ type: 'ALARM_ON', id: id }) },
        alarmOff: (id) => { dispatch({ type: 'ALARM_OFF', id: id }) },


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountDown)
