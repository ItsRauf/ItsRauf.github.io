import { h, render } from 'preact';
import Router from 'preact-router';
import 'preact/devtools';
import App from './App.js';
import NotFound from './pages/404';
import './index.css';

const root = document.getElementById('root');

const Routing = () => (
  <Router>
    <App path="/" />
    <NotFound default />
  </Router>
);

if (root) {
  render(<Routing />, root);
}
