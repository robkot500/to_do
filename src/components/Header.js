import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Play from './Play'
import CountDown from './CountDown'

function Header(props) {
    const [newDate, setNewDate] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setNewDate(new Date())
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const weekday = days[new Date().getDay()]
    const date = newDate.toLocaleDateString();
    const time = newDate.toLocaleTimeString();

    const handleClick = (e) => {
        if (e.target.id === 'list') {
            props.display(e.target.id)
        } if (e.target.id === 'task') {
            props.display(e.target.id)
        } if (e.target.id === 'add') {
            props.display(e.target.id)
        } if (e.target.id === 'edit') {
            props.display(e.target.id)
        }
    }
    const alarmOn = props.items.todos.filter(each => {
        return each.alarm.isAlarm === true
    })
    return (
        <header>
            <div className='up'>
                <div className='my-day'>{weekday}
                    <div className='date'>{time}, {date}</div>
                </div>
            </div>
            <div className='down'>
                <div className="button-wrapper">
                    <div id='list' onClick={(id) => handleClick(id)} className={props.position.position === 'list' ? ('button button-additional') : ('button')}>LIST</div>
                    <div id='task' onClick={(id) => handleClick(id)} className={props.position.position === 'task' ? ('button button-additional') : ('button')}>TASK</div>
                    <div id='add' onClick={(id) => handleClick(id)} className={props.position.position === 'add' ? ('button button-additional') : ('button')}>ADD</div>
                    <div id='edit' onClick={(id) => handleClick(id)} className={props.position.position === 'edit' ? ('button button-additional') : ('button')}>EDIT</div>
                </div>
                <div className='button-box'></div>
            </div>
            {alarmOn.length > 0 ? (alarmOn[0].alarm.isAlarm === true ? <Play /> : null) : (null)}


        </header>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        position: state.position,
        items: state.item
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        display: (id) => { dispatch({ type: 'DISPLAY', id: id }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
