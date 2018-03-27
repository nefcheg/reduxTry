import React , { Component } from 'react';

export default class LiveSearch extends Component {
  render() {
    return (
      <div className="liveSearch-wrap">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="live search..." value={this.props.dataValue} onChange={this.props.dataChange}/>
        </div>
      </div>
    )
  }
}