import React from 'react';
import { render } from 'react-dom';

import Main from './components/Main';

const App = () => <Main />;
// eslint-disable-next-line
render(<App />, document.getElementById('app'));
