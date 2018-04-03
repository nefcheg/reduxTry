import React from 'react';

export default class TagList extends React.Component{
    render() {
      return (
        <div className={`tags-wrap${((this.props.isOuter) ? " mb-40" : "")}`}>
          { this.props.isOuter && <button className={`btn${((this.props.dataActiveTag === null) ? " btn-success" : "")}`} onClick={this.props.dataSetTag(null)}>All</button> }
          { this.props.dataTagList.map((currentTag, i) => <button key={i} className={`btn${((currentTag === this.props.dataActiveTag) ? " btn-success" : "")}`} onClick={this.props.dataSetTag(currentTag)}>{currentTag}</button>) }
        </div>
      );
    }
};
