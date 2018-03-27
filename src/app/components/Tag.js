import React , { Component } from 'react';

export default class Tag extends Component {
  btnType = "btn btn-" + this.props.dataType;

  render() {
    return <button type="button" className={this.btnType} onClick={this.props.dataClick}>{this.props.tagName}</button>;
  }
}