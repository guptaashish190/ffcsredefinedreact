import React, { Component } from "react";
import { connect } from "react-redux";
import  actions from "../actions";
class App extends Component{

    componentDidMount(){
        console.log(actions);
    }

    render(){
        return (
            <div>
            <h1>Welcome React Express</h1>
            <h3 onClick = {()=>this.props.changeTest("changed")}>{this.props.test}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return ({
        test : state.reducer1.test
    })
}
const mapDispatchToProps = (dispatch)=>{
    return {
        changeTest : val=>{
            dispatch(actions.changeTest(val));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);