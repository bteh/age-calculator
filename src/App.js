import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css'
import Age from './components/Age'


class App extends Component {
	constructor(){
		super();
		this.state = {
			newDate: '',
			birthday: '1994-06-20',
			showAge: false
		}
	}

  changeBirthday(){
  	console.log(this.state)
  	this.setState({
  		birthday: this.state.newDate,
  		showAge: true
  	})
  }


	render(){
		return(
		<div className='App'> 
			<Form inline>
			<h2>Input your Birthday</h2>
				<FormControl type = 'date' 
				onChange = {(event) => {
					this.setState({ newDate: event.target.value})
				}}>
				</FormControl>
				{' '}
				<Button onClick = {() => this.changeBirthday()}>
				  Submit
				</Button>
				{
					this.state.showAge ? 
					<div className='fade age'>
					  <Age date={this.state.birthday}/>
					</div>
					 : <div></div>
				}
			</Form> 
		</div>
			)
	}
}

export default App;