import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'

// This is how basically React works under the hood:

// let h1 = React.createElement('h1', null, 'Hello, World!');

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   h1
// );

// First create root element
const rootElement = document.getElementById('root');

// Then create a root
const root = ReactDOM.createRoot(rootElement);

// Finally render the React element to the root
root.render(<App />);
