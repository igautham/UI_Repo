import React, {Component} from 'react'


//class based component
/* syntax of class based component 
class LoginComponent extends Component{
    constructor(){

    }
    render(){
        return <div></div>
    }

}
*/
export class LoginComponent extends Component{
    constructor(){
        super()
        this.state={
            username: "",
            password:""
        }
    }
    //this is called event handling 
    handleChange=(e)=>{
        console.log(e.target.value)
        let currentState = this.state;
        currentState[e.target.name] = e.target.value;
        this.setState(currentState)
    }
    render(){
        return <div>
            <input type="text" placeholder="User Name" name="username" onChange={this.handleChange}></input>
            <input type="text" placeholder="Password" name="password" onChange={this.handleChange}></input>
    <h1>{this.state.username}</h1>
    <h1>{this.state.password}</h1>
            </div>
    }
    //render must return one single tag

}
