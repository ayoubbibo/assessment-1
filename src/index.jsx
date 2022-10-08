import React from 'react';
import ReactDOM from 'react-dom';

/**
 * This file can be ignored, please work in ./components/App.jsx
 */

// Include mock API.
import './mock';


// Include styles.
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';


// Include application component.
import App from './components/App';

// Importing the Bootstrap CSS
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
