const weights10 = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
const weights12_1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
const weights12_2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];

const calculateControlSum = (weights, inn) => {
    return weights.reduce((prev, value, i) => prev + value * inn[i]);
};

const calculateControlN = (weights, inn) => {
    return (calculateControlSum(weights, inn) % 11) % 10;
};

export const isInn = (inn) => {
    if (isNaN(Number(inn))) {
        return false;
    } else if (inn.length === 10) {
        const controlN = calculateControlN(weights10, inn);
        return controlN === Number(inn[9]);
    } else if (inn.length === 12) {
        const controlN1 = calculateControlN(weights12_1, inn);
        const controlN2 = calculateControlN(weights12_2, inn);
        return controlN1 === Number(inn[10]) && controlN2 === Number(inn[11]);
    } else {
        return false;
    }

};
