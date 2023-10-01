import React from 'react';
import {
    calculateMean,
    calculateMedian,
    calculateMode,
    calculateFlavanoidValues,
    calculateGammaValues
} from './utils';

function WineStatistics({ wineData }) {
    const classes = [...new Set(wineData.map((data) => data.Alcohol))];

    const measures = ['Flavanoids', 'Gamma'];

    return (
        <div>
            {measures.map((measure) => (
                <div key={measure}>
                    <h2>{measure}</h2>
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
                                <td>{measure} Mean</td>
                                {classes.map((cls) => {
                                    const values =
                                        measure === 'Gamma'
                                            ? calculateGammaValues(wineData, cls)
                                            : calculateFlavanoidValues(wineData, cls);
                                    return (
                                        <td key={cls}>
                                            {calculateMean(values)?.toFixed(3)}
                                        </td>
                                    );
                                })}
                            </tr>
                            <tr>
                                <td>{measure} Median</td>
                                {classes.map((cls) => (
                                    <td key={cls}>
                                        {calculateMedian(
                                            measure === 'Gamma'
                                                ? calculateGammaValues(wineData, cls)
                                                : calculateFlavanoidValues(wineData, cls)
                                        )?.toFixed(3)}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td>{measure} Mode</td>
                                {classes.map((cls) => (
                                    <td key={cls}>
                                        {calculateMode(
                                            measure === 'Gamma'
                                                ? calculateGammaValues(wineData, cls)
                                                : calculateFlavanoidValues(wineData, cls)
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
