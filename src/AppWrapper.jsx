import React from 'react';
import axios from 'axios'

class AppWrapper extends React.Component {
    //--------------------------------------------------------------------
	constructor(props){
		super(props)
		console.log("AppWrapper constructor firing")
        this.eventSource = new EventSource("http://localhost:8080/product_request_receiver");
		console.log("AppWrapper constructor eventSource Initialized")
	}
    //--------------------------------------------------------------------
	componentDidMount() {
		console.log("AppWrapper componentDidMount firing")
        this.eventSource.addEventListener("dataUpdate", e =>
            this.updateState(JSON.parse(e.data))
        );

        axios.get("http://localhost:8080",
            {headers: {'Access-Control-Allow-Origin': '*'}
        })
        .then(
            (result) => {
                console.log("OK. result.data follows ...")
                console.log(result.data)
            },
            (error) => {
                console.log("NOT OK. error follows ...")
                console.log(error)
            }
            /*
            (result) => {
                this.setState({
                    isLoaded: true,
                    data: result.data
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            */
        )
	}
    //--------------------------------------------------------------------
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
