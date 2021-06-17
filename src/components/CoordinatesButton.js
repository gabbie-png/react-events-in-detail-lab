// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    recieveCoordinateFunction = (e) => {
        console.log(e)
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    } 
    
    render() {
        return (
            <div>
                <button onClick={this.recieveCoordinateFunction}>Recieve Coordinates</button>
            </div>
        )
    }
}


