import React, { Component, component } from 'react';

class Updatecontent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id :this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
      
    }
    this.inputFormHandler = this.inputFormHandler.bind(this)
  }
  inputFormHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    console.log('App render');
    console.log(this.props.data)

    return (
      <article>
        <h2>update</h2>
        <form action="/create_process" method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(
       
              this.state.id,
              this.state.title,
              this.state.desc
            );
            //  alert('submit')
          }.bind(this)}
        >
          <p><input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.inputFormHandler}
          ></input></p>

          <input type="hidden" name="id" value={this.state.id}>

          </input>
          <p>
            <textarea

              name="desc"
              placeholder="description"

              onChange={this.inputFormHandler} >
            </textarea></p>
          <p><input type="submit"></input></p>
        </form>
      </article>
    );
  }
}

export default Updatecontent;