import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'; // 使用BrowserRouter在url语义上更清晰些，就是服务端要做下重定向请求到index.html
import logo from './logo.svg';
import './App.css';
import NoMatch from './routes/NoMatch';
import routes from './routes';
import menus from './menus';

class App extends React.Component {
  render() {
    const routesDefine = routes.map((route) => {
      return <Route exact path={route.path} component={route.component} />;
    });

    const menusDefine = menus.map((menu) => {
      return <li><Link to={menu.url}>{menu.label}</Link></li>;
    });

    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>

            <ul>
              {menusDefine}
            </ul>
            <Switch>
              {routesDefine}
              {/* when none of the above match, <NoMatch> will be rendered */}
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
