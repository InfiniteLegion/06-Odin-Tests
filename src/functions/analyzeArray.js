export function analyzeArray(arr) {
    const length = arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const avg = getSum(arr) / length;

    return {
        average: avg,
        min: min,
        max: max,
        length: length
    };
}

function getSum(arr) {
    let sum = 0;
    
    arr.forEach(a => {
        sum += a;
    });

    return sum;
}