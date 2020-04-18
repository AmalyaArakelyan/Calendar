import React from 'react';
//Style
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Routing
import Routing from './Router';
//Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Routing />
    </div>
  </Provider>
    
  );
}

export default App;
