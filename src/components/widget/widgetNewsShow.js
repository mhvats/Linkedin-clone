import React from 'react'
import './widgetNewsShow.css'

function widgetNewsShow({ news, days, readers }) {
    return (
        <div className='widgetNewsShow'>
            <ul>
                <li>{news}</li>
            </ul>
                <p>{days}d ago ,{readers} readers</p>
        </div>
    )
}

export default widgetNewsShow
