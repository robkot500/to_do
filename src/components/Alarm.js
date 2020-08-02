import React, { useState } from 'react'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Alarm(props) {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (date) => {
        // console.log(date.toLocalString())
        // setStartDate(date)
        props.addSetDate(date)
        return date
    }
    return (
        <>
            <div>Podaj datę</div>
            <DatePicker
                // selected={new Date()}
                selected={startDate}

                // onChange={date => setStartDate(date)}
                onChange={date => handleChange(date),
                    date => setStartDate(date)
                }
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeInput
                placeholderText="Click to select a date"
            />
            {/* <div>{startDate}</div> */}
        </>
    );
}
const mapStateToProps = (state) => {
    console.log(state.item.todos)
    console.log(state);
    return { setDate: state.position.date }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addSetDate: (date) => { dispatch({ type: 'ADD_SET_DATE', date: date }) }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Alarm)

