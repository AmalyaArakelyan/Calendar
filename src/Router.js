import React, { lazy, Suspense, useEffect } from 'react';
import {Router, Route } from 'react-router-dom';
//Components
import LazyLoad from './components/loading/Loading';
import NavBar from './components/Navbar/NavBar'
//History from State
import { history } from './redux/store';

const Home = lazy(() => import('./pages/Home'));
const List = lazy(() => import('./pages/ItemList.js'));

function Routing (props) {

    useEffect(() => {
      const unlisten = history.listen(() => {
        window.scrollTo(0, 0);
      });
      return () => {
        unlisten();
      };
    }, []);
  
    return (
      <Suspense fallback={<LazyLoad />}>
          <Router history={history}>
            <NavBar/>
            <Route path="/" render={props => <Home {...props} />} exact />
            <Route
              path="/item-list"
              render={props => <List {...props} />}
            />
        </Router>
      </Suspense>
    );
  };
  
  export default Routing;