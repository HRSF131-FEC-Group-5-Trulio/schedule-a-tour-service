import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// aquire the listing_id from the url
// eslint-disable-next-line no-undef
const id = Number(window.location.pathname.slice(1, -1));

// eslint-disable-next-line no-undef
ReactDOM.render(<App id={id} />, document.getElementById('app_ScheduleTour'));
