import React from "react";

class Body3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: "Mobile",
            price: 10000,
            vendor: "Samsung"
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.product}</h1>
                <h2>{this.state.price}</h2>
                <h3>{this.state.vendor}</h3>
                <input type="text" onChange={(event) => {
                    const value = parseFloat(event.target.value);
                    if (!isNaN(value)) {
                        this.setState({
                            price: value
                        });
                    }
                }} placeholder="update price"/>
            </div>
        );
    }
}

export default Body3;

// Why This Rule Exists:
// Parent class needs to initialize first - React.Component sets up internal properties
// this object isn't ready yet - JavaScript needs to build the complete object hierarchy
// Prevents bugs - Ensures the parent class is properly initialized before child class uses it
// What super(props) does:
// Calls the parent constructor (React.Component's constructor)
// Makes this available for use in your constructor
// Passes props to the parent so this.props works properly