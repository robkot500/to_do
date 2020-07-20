import React, { useState } from 'react';
import { connect } from 'react-redux';

function Header(props) {

    console.log(props);
    const handleClick = (e) => {
        console.log(e.target.id);
        if (e.target.id === 'list') {
            props.display(e.target.id)
        } if (e.target.id === 'task') {
            props.display(e.target.id)
        } if (e.target.id === 'add') {
            props.display(e.target.id)
        }
    }

    return (
        <header>
            <div className='up'></div>
            <div className='down'>
                <div className="button-wrapper">
                    <div id='list' onClick={(id) => handleClick(id)} className={props.position === 'list' ? ('button button-additional') : ('button')}>LIST</div>
                    <div id='task' onClick={(id) => handleClick(id)} className={props.position === 'task' ? ('button button-additional') : ('button')}>TASK</div>
                    <div id='add' onClick={(id) => handleClick(id)} className={props.position === 'add' ? ('button button-additional') : ('button')}>ADD</div>
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
const mapDipatchToProps = (dispatch) => {
    return {
        display: (id) => { dispatch({ type: 'DISPLAY', id: id }) }
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(Header)
