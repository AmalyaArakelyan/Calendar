import React from 'react';
import './App.css';
import Routing from './Router';
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
