import React from 'react'

function List() {
    return (
        <div className='list'>
            <div className='item'>
                <div className='title'>
                    <div className='title-wrapper'>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> I have a bike</label>
                    </div>
                </div>
                <div className='date'></div>
                <div className='detail'></div>
            </div>
            <div className='item'>
                <div className='title-wrapper'>
                    <input type="checkbox" id="todo" name="todo" value="todo" />
                    <label for="todo" data-content="Get out of bed">Get out of bed</label>
                </div>
            </div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
        </div>
    )
}

export default List
