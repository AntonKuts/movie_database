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
              <li><Link to={"/"}>Главная</Link></li>
              <li><Link to={"/Movies"}>Фильмы</Link></li>
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
