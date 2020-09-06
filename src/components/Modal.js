import React, { useState } from 'react'
import Popup from "reactjs-popup";
import { connect } from 'react-redux'


const Modal = (props) => (
    < Popup
        trigger={<span className='pointer'>Here</span>}

        modal
        closeOnDocumentClick
    >

        <div className=' course-spec'></div>


    </Popup >

);
const mapStateToProps = (state) => {
    return {
        items: state.item,
    }
}
export default connect(mapStateToProps)(Modal)