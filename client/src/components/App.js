import React, { Component } from "react";

class App extends Component{

    state = {
        test : ""
    }

    componentDidMount(){
        fetch("http://localhost:3005/test",{method: "get"}).then((data)=>{
            console.log(data);
            return data.json();
        }).then((res)=>{
            console.log(res);
            this.setState({
                test: res.status1
            });
        });
    }
    render(){
        return (
            <div>
            <h1>Welcome React Express</h1>
            <h3>{this.state.test}</h3>
            </div>
        );
    }
}

export default App;