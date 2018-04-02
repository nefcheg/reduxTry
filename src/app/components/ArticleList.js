import React , { Component } from 'react';
import ArticleItem from './ArticleItem';

export default class ArticleList extends Component{
 render() {
   const { data, dataClick } = this.props;

   if (data.length === 0) {
     return (<div className="alert alert-info">no results found</div>);
   }

   return (
     <div className="row">
       { data.map((current, i) => <ArticleItem key={i} dataClick={dataClick} dataItem={current} dataActiveTag={this.props.dataActiveTag}/>) }
     </div>
   );
 }
}