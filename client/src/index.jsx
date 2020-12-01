import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// aquire the listing_id from the url
const id = Number(window.location.pathname.slice(1, -1));

ReactDOM.render(<App id={id} />, document.getElementById('app_ScheduleTour'));
