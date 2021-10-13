import React, { Component } from 'react'
import './Appcounter.css';
class Appcounter extends Component {
    constructor(){
        super()
        this.state={
            num:0
        }
       
    }
     add=()=> {
        this.setState({num:this.state.num +1})
     }
     sub=()=> {
        this.setState({num:this.state.num -1})
     }
    
    render() {
        return (
            <div>
                <h1 className='number'>{this.state.num}</h1>
                <button className='button' onClick={this.add} >Add 1</button>
                <button className='button' onClick={this.sub} >Subract 1</button>
                <hr />
            </div>
        )
    }
}

export default Appcounter
