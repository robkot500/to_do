import React from 'react'
import Task from './Task';
import List from './List';
import Add from './Add';
import Header from './Header';
import { connect } from 'react-redux';
import Points from './Points'
import Play from './Play'
import Edit from './Edit';

function Main(props) {
    console.log(props);

    return (
        <div className='mobile'>
            <Header />
            {props.position.position === 'list' ? <List /> : null}
            {props.position.position === 'task' ? <Task /> : null}
            {props.position.position === 'add' ? <Add /> : null}
            {props.position.position === 'edit' ? <Edit /> : null}
            {/* <Play /> */}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        position: state.position,
        items: state.item

    }
}
export default connect(mapStateToProps)(Main)
