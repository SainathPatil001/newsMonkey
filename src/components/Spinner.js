import React, { Component } from 'react'
import spinner from '../loader.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center ">
                 <img src={spinner} alt="loading"  />
            </div>
        )
    }
}
