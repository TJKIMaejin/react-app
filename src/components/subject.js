import React, { Component, component } from 'react';




class Subject extends Component {
  render() {
    console.log('App render');
    return (
      <header>
        <h1><a href="/" onClick={function (e) {
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)}>{this.props.title} </a> </h1>
        {this.props.sub}
      </header>
    );
  }

}


export default Subject;