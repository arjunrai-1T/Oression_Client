import React    from 'react';
import ReactDOM from 'react-dom';

import App          from './pages/App/App';
import store        from './Redux/Store';
import { Provider } from 'react-redux';
import './css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);


