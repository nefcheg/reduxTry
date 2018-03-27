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
    console.log(getData());
    let arcticleObj;
    getData().then((data) => {
        data.forEach((current) => {
          if (current.id === +this.articleId) {
            arcticleObj = current;
            return false;
          }
        });
        this.setState({ isWaiting: false, dataObject: arcticleObj });
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
