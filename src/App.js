import React, { Component } from 'react'

import reactInfo from './react.md'
import reactImg from './react.png'
import trainingImg from './training.jpg'

class App extends Component {

	state = {
		background: ''
	}

	paintMe = () => this.setState({
		background: `rgb(${Math.random()*256|0},${Math.random()*256|0},${Math.random()*256|0})`
	})

	render(){
		const {background} = this.state;
		return (
			<div>
				<img src={reactImg} alt="" width="100" />
				<h1 style={{background}}>React App</h1>
				<button onClick={this.paintMe}>Welcome!</button>
				<div dangerouslySetInnerHTML={{__html: reactInfo}} />

				<p><img src={trainingImg} alt="" width="300" /></p>

			</div>
		)
	}
}

export default App
