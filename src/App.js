// src/App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import WineStatistics from './WineStatistics';

function App() {
  const [wineData, setWineData] = useState([]);

  useEffect(() => {
    fetch('/wineData.json')
      .then((response) => response.json())
      .then((data) => {
        setWineData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Wine Statistics</h1>
        <WineStatistics wineData={wineData} />
      </header>
    </div>
  );
}

export default App;
