import React, { useState } from 'react';
import { connect } from 'react-redux';

function Header(props) {

    console.log('sss', props);
    const handleClick = (e) => {
        console.log('aaaa', e.target.id);
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

    return (
        <header>
            <div className='up'></div>
            <div className='down'>
                <div className="button-wrapper">
                    <div id='list' onClick={(id) => handleClick(id)} className={props.position.position === 'list' ? ('button button-additional') : ('button')}>LIST</div>
                    <div id='task' onClick={(id) => handleClick(id)} className={props.position.position === 'task' ? ('button button-additional') : ('button')}>TASK</div>
                    <div id='add' onClick={(id) => handleClick(id)} className={props.position.position === 'add' ? ('button button-additional') : ('button')}>ADD</div>
                    <div id='edit' onClick={(id) => handleClick(id)} className={props.position.position === 'edit' ? ('button button-additional') : ('button')}>EDIT</div>
<<<<<<< HEAD
=======

>>>>>>> 0fc674d9c481eea09304b2b5a6e6bb868609e566
                </div>
                <div className='button-box'></div>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        position: state.position
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        display: (id) => { dispatch({ type: 'DISPLAY', id: id }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
