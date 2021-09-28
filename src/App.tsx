import React from 'react';
import { Alert } from '@grafana/ui';

import './App.css';

function App() {
  return (
    <div className="App">
      <Alert title="Some very important message" severity="info" />
    </div>
  );
}

export default App;
