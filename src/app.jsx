import React from 'react';
import { render } from 'react-dom';

import Main from './components/Main';

import './styles/form-reset.css';
import 'minireset.css';
import './styles/common.css';

const App = () => <Main />;
// eslint-disable-next-line
render(<App />, document.getElementById('app'));
