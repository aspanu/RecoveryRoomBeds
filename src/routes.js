// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import AdminPage from './components/AdminPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={AdminPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;