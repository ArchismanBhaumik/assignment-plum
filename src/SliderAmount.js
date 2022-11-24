import React, { Component } from 'react'

export class SliderAmount extends Component {
  render() {
    return (
      <div className='range'>
        <div className='sliderValue'>
            <span>5</span>
        </div>
        <div className='feild'>
        <div className='value left'>0</div>
        
        <div className='value left'>5</div>
        </div>
      </div>
    )
  }
}

export default SliderAmount