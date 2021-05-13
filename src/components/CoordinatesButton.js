// Code CoordinatesButton Component Here

import React, { Component } from 'react'

class CoordinatesButton extends Component {

    

    render() {
        return(
            <div>
                <button onClick={(e) => (this.props.onReceiveCoordinates([e.clientX, e.clientY]))}>Coordinates Button</button>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default CoordinatesButton
