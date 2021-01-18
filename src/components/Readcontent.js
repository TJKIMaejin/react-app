import React, { Component, component } from 'react';

class ReadContent extends Component {
  render() {
    console.log('App render');
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.decs}
      </article>
    );
  }
}

export default ReadContent;