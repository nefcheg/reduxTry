import React , { Component } from 'react';

export default class Tag extends Component {
  btnType = "btn btn-primary";

  render() {
    return (
      <button type="button" className={this.btnType} onClick={this.props.dataClick(this.props.tagName)}>
        {this.props.tagName}
      </button>
    );
  }
}