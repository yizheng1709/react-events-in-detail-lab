// Code DelayedButton Component Here


import React, { Component } from 'react' 

class DelayedButton extends Component {
    render() {
        // debugger
        // let currentProps = this.props
        return(
            <div>
                <button onClick={ (e)=> {
                    e.persist()
                    // debugger
                    setTimeout(() => this.props.onDelayedClick(e), this.props.delay)} } > Delayed Button
                    </button>
                <br></br>
            </div>
        )
    }
}

export default DelayedButton