import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import '../../css/App.css'

import * as articleListActions from '../actions/ArticleListActions'

import ArticleList from '../components/ArticleList'
import TagList from '../components/TagList'
import LiveSearch from '../components/LiveSearch'
import Preloader from '../components/Preloader'

import getData from '../GetData'

export class ArticlesListPage extends Component {
  state = {
    isWaiting: false
  };

  actions = this.props.articleListActions;

  //получение полного списка тегов
  getAllTags = (data) => {
    let tagsArray = [];

    data.forEach((current) => {
      current.tags.forEach((tag) => {
        (tagsArray.indexOf(tag) === -1) ? (tagsArray.push(tag)) : null;
      })
    });

    return tagsArray;
  };



  //Получение списка отфильтрованных статей
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

  //выбор активного тега
  tagClick = (tag) => () => {
    this.actions.setTag(tag);
  };

  //livesearch
  inputChange = (e) => {
    this.actions.setLivesearch(e.target.value);
  };

  //загрузка данных
  componentDidMount() {
    // this.setState({ isWaiting: true });
    //
    // getData().then((data) => {
    //     this.setState({ isWaiting: false });
    //     this.actions.setData(data);
    //   }).catch(alert);
    if (this.props.dataObject.length === 0) {
      this.actions.getData()
    }
  };

  //------------------------------------------------

  getPageJSX = () => {
    return (
      <div className="container">
        <LiveSearch dataChange={this.inputChange} dataValue={this.props.liveSearchString} />
        <TagList dataTagList={this.getAllTags(this.props.dataObject)} dataSetTag={this.tagClick} dataActiveTag={this.props.currentTag} isOuter={true}/>
        <ArticleList data={this.getArticlesList(this.props.currentTag, this.props.liveSearchString)} dataActiveTag={this.props.currentTag} dataClick={this.tagClick}/>
      </div>
    )
  };

  render() {
    return (
        <div className="App">
          { this.props.isWaiting && <Preloader /> }
          { !this.props.isWaiting && this.getPageJSX() }
        </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    currentTag: state.articleList.currentTag,
    liveSearchString: state.articleList.liveSearchString,
    dataObject: state.articleList.dataObject,
    isWaiting: state.articleList.isWaiting
  }
}

function mapDispatchToProps(dispatch) {
  return {
    articleListActions: bindActionCreators(articleListActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesListPage);


