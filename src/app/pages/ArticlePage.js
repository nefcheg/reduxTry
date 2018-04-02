import React, { Component } from 'react';
import '../../css/App.css';
import getData from '../GetData'
import Preloader from '../components/Preloader'

export default class ArticlePage extends Component {
  state = {
    isWaiting: false,
    dataObject: []
  };
  articleId = this.props.match.params.id;

  componentWillMount() {
    this.setState({ isWaiting: true });
    let articleObj;
    getData().then((data) => {
        data.forEach((current) => {
          if (current.id === +this.articleId) {
            articleObj = current;
            return false;
          }
        });
        this.setState({ isWaiting: false, dataObject: articleObj });
      }).catch(alert);
  };

  render() {
    return (
      <div>
        {(this.state.isWaiting) && <Preloader />}
        <div className="container">
          <h1>{this.state.dataObject.title}</h1>
          <p>{this.state.dataObject.description}</p>
        </div>
      </div>
    );
  }
}
