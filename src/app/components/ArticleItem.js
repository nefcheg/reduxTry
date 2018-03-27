import React , { Component } from 'react';
import Tag from './Tag'
import { Link } from 'react-router-dom';

export default class ArticleItem extends Component{
  render() {
    const { id, title, tags, link } = this.props.dataItem;
    return (
      <div key={id} className="col-md-4 mb-5 d-flex">
        <div className="card box-shadow">
          <div className="card-body">
            <h3>{title}</h3>
            <div className="tags-wrap">{tags.map((current, i) => <Tag key={i} tagName={current} dataType="link" dataClick={this.props.dataClick} />)}</div>
          </div>
          <Link className="btn btn-secondary" to={link} role="button">View details »</Link>
        </div>
      </div>
    );
  }
}