import React from 'react';
import { createRoot } from 'react-dom/client';
import TsCop from '@/components/TsCop';
import './public.css';
import styles from './index.less';


const App = () => {
  return (
    <div className={styles.root}>
      <TsCop />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
