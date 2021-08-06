import React, { Component } from 'react'

export default class Sonnet extends Component {
    render() {
        
        return (
            <div className="p-3">
                {this.props.children}
            </div>
        )
    }
}
