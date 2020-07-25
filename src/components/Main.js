import React from 'react'
import Task from './Task';
import List from './List';
import Add from './Add';
import Header from './Header';
import { connect } from 'react-redux';

function Main(props) {
    console.log(props);
    // let position
    // if (props.position.position === true) {
    //     position = 'task'
    // }
    return (
        <div className='mobile'>
            <Header />
            {props.position.position === 'list' ? <List /> : null}
            {props.position.position === 'task' ? <Task /> : null}
            {props.position.position === 'add' ? <Add /> : null}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        position: state.position
    }
}
export default connect(mapStateToProps)(Main)
