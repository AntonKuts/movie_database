import React, {Component} from 'react';
import {Link} from 'react-router'

export default class MainLayout extends Component {
  render() {
    return(
    <div>
       <div className="footer">
        <h1>Популярные фильмы</h1>
          <aside>
            <ul>
              <li><Link to={"/"}>Самые популярные фильмы</Link></li>
              <li><Link to={"/Movies"}>Поиск и больше фильмов </Link></li>
              <li><Link to={"/MoviesEU"}>English version</Link></li>
            </ul>
          </aside>
          <main>
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
};
