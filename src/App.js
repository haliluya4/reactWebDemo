import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NoMatch from './routes/NoMatch';
import routes from './routes';
import Menus from './components/Menus';

const ROOT = '/';

class App extends React.Component {
  render() {
    const {location} = this.props;

    // 小屏下内容菜单分开，大屏下左右分
    const onlyMenu = document.body.clientWidth < 769;
    const showMenu = onlyMenu ? location.pathname === ROOT : true;
    const showContent = location.pathname !== ROOT;

    const routesDefine = routes.map((route, index) => {
      return <Route exact
                    path={route.path}
                    component={route.component}
                    key={`route-${index}`} />;
    });

    const currentYear = String(new Date().getFullYear());

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <div className='App-container'>
            {showMenu && <div className='App-menu'><Menus /></div>}
            {showContent &&
            <div className='App-content'>
              <Switch>
                {routesDefine}
                {/* when none of the above match, <NoMatch> will be rendered */}
                <Route component={NoMatch} />
              </Switch>
            </div>
            }
          </div>
          <div className='App-footer'>
            {`JohnsonXu © 2017${currentYear !== '2017' ?
                `~${currentYear}` :
                ''}`}
          </div>
        </div>
    );
  }
}

export default withRouter(App);
