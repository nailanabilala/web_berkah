/**
 * Entry point of the React application.
 *
 * Imports the root component (App) and renders it into the DOM node with id 'root'.
 * It also imports global CSS styles.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
