import React, {Component} from 'react';
import {Link} from 'react-router'

export default class MainLayout extends Component {
  render() {
    return(
    <div>
      <div className="mainBox">
       <div className="footer">
        <h1>Movie_Database</h1>
          <aside>
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/Movies"}>Movies</Link></li>
            </ul>
          </aside>
          <main>
            {this.props.children}
          </main>
        </div>
      </div>
    </div>
    );
  }
};
