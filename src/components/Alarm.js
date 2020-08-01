import React, { useState } from 'react'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Alarm(props) {
    console.log(props)
    // const [startDate, setStartDate] = useState(null);

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
                selected={props.setDate}

                // onChange={date => setStartDate(date)}
                onChange={date => handleChange(date)}
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
    console.log(state.position.date)
    return { setDate: state.position.date }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addSetDate: (setDate) => { dispatch({ type: 'ADD_SET_DATE', setDate: setDate }) }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Alarm)

