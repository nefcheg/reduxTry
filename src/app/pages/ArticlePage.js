import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import '../../css/App.css';

import * as articleItemActions from "../actions/ArticleItemActions";

import Preloader from '../components/Preloader'
import getData from '../GetData'


class ArticlePage extends Component {
  state = {
    isWaiting: false
  };

  articleId = this.props.match.params.id;
  actions = this.props.articleItemActions;

  componentWillMount() {
    this.setState({ isWaiting: true });

    getData().then((data) => {
        data.forEach((current) => {
          if (current.id === +this.articleId) {
            this.actions.setArticle(current);
            return false;
          }
        });

        this.setState({ isWaiting: false });
      }).catch(alert);
  };

  getPageJSX = () => {
    return (
      <div className="container">
        <h1>{this.props.currentArticle.title}</h1>
        <p>{this.props.currentArticle.description}</p>
      </div>
    )
  };

  render() {
    return (
      <div>
        {(this.state.isWaiting) && <Preloader />}
        {(!this.state.isWaiting) && this.getPageJSX()}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    currentArticle: state.articleItem.currentArticle,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    articleItemActions: bindActionCreators(articleItemActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
