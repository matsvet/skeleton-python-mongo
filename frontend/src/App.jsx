import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { CrudCollection, Header, SecondCrudCollection } from './components/index';
import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path={'/'} element={<h1>Hello dolbaeb</h1>} />
        <Route path={'/crud-collection'} element={<CrudCollection />} />
        <Route path={'/second-crud-collection'} element={<SecondCrudCollection />} />
      </Routes>
    </div>
  );
}

export default App;
