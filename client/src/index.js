import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas }  from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


library.add(fas, far);

ReactDOM.render(<App />, document.getElementById('root'));

