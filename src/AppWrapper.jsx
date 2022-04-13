import React from 'react';
import axios from 'axios'

class AppWrapper extends React.Component {
    //--------------------------------------------------------------------
	constructor(props){
		super(props)
		console.log("AppWrapper constructor firing")
        //this.eventSource = new EventSource("http://localhost:8080/product_request_receiver");
        this.eventSource = new EventSource('http://localhost:8080/product_request_receiver');
		console.log("AppWrapper constructor eventSource Initialized")
	}
    //--------------------------------------------------------------------
	componentDidMount() {
		console.log("AppWrapper componentDidMount firing")
        this.eventSource.addEventListener("productRequest", e => {
            console.log(e)
            console.log("----------------------------------------------")
            console.log(e.data)
            console.log("----------------------------------------------")
            this.processProductRequest(JSON.parse(e.data))
        }
        );
        /*
        axios.get("http://localhost:8080",
            {headers: {'Access-Control-Allow-Origin': '*'}
        })
        .then(
            (result) => {
                console.log("OK. result.data follows ...")
                console.log(result)
            },
            (error) => {
                console.log("NOT OK. error follows ...")
                console.log(error)
            }
        )
        */
	}
    processProductRequest(productRequest) {
        console.log("updateState is triggered")
        this.props.setProductId(productRequest.product_code)
    }
    //--------------------------------------------------------------------
	render() {
		return (
			<>
			<h1>This is AppWrapper</h1>
            <p>{this.props.productId}</p>
			<div>
				{this.props.children}
			</div>
			</>
		)
	}
}
export default AppWrapper;
