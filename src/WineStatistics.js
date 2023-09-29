import React from 'react';
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from './utils';

function WineStatistics({ wineData }) {
  const classes = [...new Set(wineData.map((data) => data.Alcohol))];

  const measures = [
    { label: 'Flavanoids', property: 'Flavanoids' },
    { label: 'Gamma', property: 'Gamma' },
  ];

  return (
    <div>
      {measures.map((measure) => (
        <div key={measure.label}>
          <h2>{measure.label}</h2>
          <table>
            <thead>
              <tr>
                <th>Measure</th>
                {classes.map((cls) => (
                  <th key={cls}>Class {cls}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{measure.label} Mean</td>
                {classes.map((cls) => (
                  <td key={cls}>
                    {calculateMean(
                      wineData
                        .filter((data) => data.Alcohol === cls)
                        .map((data) => parseFloat(data[measure.property]))
                        .filter((value) => !isNaN(value))
                    )?.toFixed(3)}
                  </td>
                ))}
              </tr>
              <tr>
                <td>{measure.label} Median</td>
                {classes.map((cls) => (
                  <td key={cls}>
                    {calculateMedian(
                      wineData
                        .filter((data) => data.Alcohol === cls)
                        .map((data) => parseFloat(data[measure.property]))
                        .filter((value) => !isNaN(value))
                    )?.toFixed(3)}
                  </td>
                ))}
              </tr>
              <tr>
                <td>{measure.label} Mode</td>
                {classes.map((cls) => (
                  <td key={cls}>
                    {calculateMode(
                      wineData
                        .filter((data) => data.Alcohol === cls)
                        .map((data) => parseFloat(data[measure.property])) // Parse measure values to floats
                        .filter((value) => !isNaN(value))
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default WineStatistics;
