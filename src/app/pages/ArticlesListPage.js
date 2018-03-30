import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import '../../css/App.css'

import * as articleActions from '../actions'

import ArticleList from '../components/ArticleList'
import Tag from '../components/Tag'
import LiveSearch from '../components/LiveSearch'
import Preloader from '../components/Preloader'

import getData from '../GetData'

export class ArticlesListPage extends Component {
  state = {
    isLoading: false,
    dataObject: []
  };

  actions = this.props.articleActions;

  getAllTags = (data) => {
    let tagsArray = [];

    data.forEach((current) => {
      current.tags.forEach((tag) => {
        (tagsArray.indexOf(tag) === -1) ? (tagsArray.push(tag)) : null;
      })
    });

    return tagsArray;
  };

  getArticlesList = (tag, string) => {
    if (tag === null && string === "")  {
      return this.props.dataObject;
    }

    const lowerString = string.toLowerCase();


    if (tag === null) return this.props.dataObject.filter((current) => {
      return current.title.toLowerCase().indexOf(lowerString) !== -1
    });

    return this.props.dataObject.filter((current) => {
      return (current.tags.includes(tag) && (current.title.toLowerCase().indexOf(lowerString) !== -1));
    });
  };

  tagClick = (tag) => () => {
    this.actions.setTag(tag);
  };

  clearFilter = () => {
    this.actions.setTag(null);
  };

  inputChange = (e) => {
    this.actions.setLivesearch(e.target.value);
  };

  componentWillMount() {
    this.setState({ isLoading: true });

    getData().then((data) => {
        this.setState({ isLoading: false });
        this.actions.setData(data);
      }).catch(alert);
  };

  getPageContent = () => {
    return (
      <div className="container">
        <LiveSearch dataChange={this.inputChange} dataValue={this.props.liveSearchString} />
        <div className="tags-wrap mb-40">
          <button className="btn btn-link" onClick={this.clearFilter}>All</button>
          {this.getAllTags(this.props.dataObject).map((current,i) => <Tag key={i} tagName={current} dataClick={this.tagClick} dataType="link"/>)}
        </div>
        <ArticleList data={this.getArticlesList(this.props.currentTag, this.props.liveSearchString)} dataClick={this.tagClick}/>
      </div>
    )
  };

  render() {
    return (
        <div className="App">
          { this.state.isLoading && <Preloader /> }
          { !this.state.isLoading && this.getPageContent() }
        </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    currentTag: state.articleList.currentTag,
    liveSearchString: state.articleList.liveSearchString,
    dataObject: state.articleList.dataObject
  }
}

function mapDispatchToProps(dispatch) {
  return {
    articleActions: bindActionCreators(articleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesListPage);


