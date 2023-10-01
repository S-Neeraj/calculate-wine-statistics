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


export function calculateFlavanoidValues(wineData, cls) {
    return wineData
        .filter((data) => data.Alcohol === cls)
        .map((data) => parseFloat(data.Flavanoids))
        .filter((value) => !isNaN(value));
}

export function calculateGammaValues(wineData, cls) {
    return wineData
        .filter((data) => data.Alcohol === cls)
        .map(
            (data) =>
                (parseFloat(data.Ash) * parseFloat(data.Hue)) /
                parseFloat(data.Magnesium)
        )
        .filter((value) => !isNaN(value));
}