import React from 'react';

class AppWrapper extends React.Component {
	constructor(props){
		super(props)
		console.log("AppWrapper constructor firing")
	}

	componentDidMount() {
		console.log("AppWrapper componentDidMount firing")
	}

	render() {
		return (
			<>
			<h1>This is AppWrapper</h1>
			<div>
				{this.props.children}
			</div>
			</>
		)
	}
}
export default AppWrapper;
