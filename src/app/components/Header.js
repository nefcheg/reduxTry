import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Hello, world!</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        </div>
      </div>
    )
  }
}