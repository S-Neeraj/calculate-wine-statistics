export function calculateMean(data) {
    const sum = data.reduce((acc, value) => acc + value, 0);
    return sum / data.length;
  }
  
  export function calculateMedian(data) {
    const sortedData = [...data].sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  }
  
  export function calculateMode(data) {
    const frequency = {};
    data.forEach((value) => {
      frequency[value] = (frequency[value] || 0) + 1;
    });
    let mode;
    let maxFrequency = 0;
    for (const value in frequency) {
      if (frequency[value] > maxFrequency) {
        mode = value;
        maxFrequency = frequency[value];
      }
    }
    return mode;
  }
  
  export function calculateGamma(dataPoint) {
    console.log('dataPoint',dataPoint)
    return (dataPoint.Ash * dataPoint.Hue) / dataPoint.Magnesium;
  }
  