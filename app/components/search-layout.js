import React, {Component} from 'react';

export default class SerchLayout extends Component {
  render () {
    return(
      <div>
      <header></header>
      <div>{this.props.children}</div>
      <h5>Тут может быть Ваша реклама!</h5>
      </div>
    );
  }
};
