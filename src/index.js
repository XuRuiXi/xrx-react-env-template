import React from 'react';
import { createRoot } from 'react-dom/client';
import './public.css';
import styles from './index.less';
import Home from './pages/Home';


const App = () => {
  return (
    <div className={styles.root}>
      <Home />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
