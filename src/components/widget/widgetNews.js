import React from 'react'
import './widgetNews.css'
import WidgetNewsShow from './widgetNewsShow'
function widgetNews() {
  return (
    <div className='widgetNews'>
        <p id='linkedin-news'>LinkedIn News</p>
        <WidgetNewsShow news ='apes takedown human race' readers={5000} days='1'/>
        <WidgetNewsShow news ='apes takedown human race' readers={5000} days='1'/>
        <WidgetNewsShow news ='apes takedown human race' readers={5000} days='1'/>
        <WidgetNewsShow news ='apes takedown human race' readers={5000} days='1'/>
        <WidgetNewsShow news ='apes takedown human race' readers={5000} days='1'/>
    </div>
  )
}

export default widgetNews
