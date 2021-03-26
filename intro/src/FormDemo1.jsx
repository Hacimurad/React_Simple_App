import React, { Component } from 'react'
import alertify from 'alertifyjs'

export default class FormDemo1 extends Component {

    state={userName:''}

    onChangeHandler=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }

    onSubmitHandler=(event)=>{
        event.preventDefault();
      
        alertify.success(this.state.userName +"----added to db")
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.onSubmitHandler}>
                    <h3>User Name</h3>
                    <input onChange={this.onChangeHandler} type="text"/>
                    <h3>User Name is {this.state.userName}</h3>
                    <input type="submit" value="save"/>
                </form>
            </div>
        )
    }
}
