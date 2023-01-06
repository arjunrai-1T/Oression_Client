import React           from 'react';
import ReactDOM        from 'react-dom';
import { Provider }    from 'react-redux';
import * as dotenv     from 'dotenv';
import App             from './pages/App/App';
import oressionStore   from './Redux/Store';

dotenv.config();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={oressionStore}>
      <App/>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);


