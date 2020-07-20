import React from 'react'
import Task from './Task';
import List from './List';
import Add from './Add';
import Header from './Header';
import { connect } from 'react-redux';

function Main(props) {
    console.log(props);
    return (
        <div className='mobile'>
            <Header />
            {props.position === 'list' ? <List /> : null}
            {props.position === 'task' ? <Task /> : null}
            {props.position === 'add' ? <Add /> : null}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        position: state.position
    }
}
export default connect(mapStateToProps)(Main)
