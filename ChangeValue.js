import React from "react";
class Formula extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            a:1,
            b:2,
            c:3
        };

    }

    changeA=() => {
        this.setState({a:2});
    }

    changeB=() => {
        this.setState({b:3});
    }

    changeC=() => {
        this.setState({c:4});
    }

    changeABC=() => {
        this.setState(
            {
                a:5,
                b:5,
                c:5
            }
        )
    } 


    render(){
        return(
            <>
            <button class="button" onClick={this.changeA}> change a</button> <br></br>
            <button class="button" onClick={this.changeB}> change b</button> <br></br>
            <button class="button" onClick={this.changeC}> change c</button> <br></br>
            <button class="button" onClick={this.changeABC}> change a,b,c</button> <br></br>
            
            <h3>a = {this.state.a}</h3>
            <h3>b = {this.state.b}</h3>
            <h3>c = {this.state.c}</h3>
            <h1>total value = {this.state.a+this.state.b+this.state.c}</h1>
            </>
        )
    }
}

export {Formula};