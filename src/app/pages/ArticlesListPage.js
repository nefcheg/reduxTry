import React, { Component } from 'react';
import '../../css/App.css';
import ArticleList from '../components/ArticleList';
import Tag from '../components/Tag'
import LiveSearch from '../components/LiveSearch'
import Preloader from '../components/Preloader'
import getData from '../GetData'

export default class ArticlesListPage extends Component {
  state = {
    currentTag: null,
    isLoading: false,
    liveSearchString: '',
    dataObject: []
  };

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
    if (this.state.currentTag === null && this.state.liveSearchString === "")  {
      return this.state.dataObject;
    }

    const lowerString = string.toLowerCase();

    if (this.state.currentTag === null) return this.dataObject.filter(current => current.title.toLowerCase().indexOf(lowerString) !== -1);

    return this.state.dataObject.filter((current) => {
      return (current.tags.includes(tag) && (current.title.toLowerCase().indexOf(lowerString) !== -1));
    });
  };

  tagClick = (e) => {
    this.setState({currentTag: e.target.innerHTML})
  };

  clearFilter = () => {
    this.setState({currentTag: null});
  };

  inputChange = (e) => {
    this.setState({liveSearchString: e.target.value});
  };

  componentWillMount() {
    this.setState({ isLoading: true });

    getData().then((data) => {
        this.setState({ isLoading: false, dataObject: data });
      }).catch(alert);
  };

  getPageContent = () => {
    return (
      <div className="container">
        <LiveSearch dataChange={this.inputChange} dataValue={this.state.liveSearchString} />
        <div className="tags-wrap mb-40">
          <button className="btn btn-link" onClick={this.clearFilter}>All</button>
          {this.getAllTags(this.state.dataObject).map((current,i) => <Tag key={i} tagName={current} dataClick={this.tagClick} dataType="link"/>)}
        </div>
        <ArticleList data={this.getArticlesList(this.state.currentTag, this.state.liveSearchString)} dataClick={this.tagClick} dataSearchString={this.state.liveSearchString}/>
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
