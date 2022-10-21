const weights10 = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
const weights12_1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
const weights12_2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];

export const weightedSum = (a, w) => {
    if (w.length !== a.length) {
        throw new Error("Different array and weights length!");
    } else {
        let wSum = 0;
        for (let i = 0; i < a.length; i++) {
            if (isNaN(w[i])) {
                throw new Error("NaN weight!");
            }

            if (isNaN(a[i])) {
                throw new Error("NaN array element!");
            }
            wSum += w[i] * a[i];
        }
        return wSum;
    }
};

export const isInn = (inn) => {
    if (isNaN(Number(inn))) {
        return false;
    } else if (inn.length === 10) {
        const controlN = (weightedSum(inn, weights10) % 11) % 10;
        return controlN === Number(inn[9]);
    } else if (inn.length === 12) {
        const controlN1 = (weightedSum(inn, weights12_1) % 11) % 10;
        const controlN2 = (weightedSum(inn, weights12_2) % 11) % 10;
        return controlN1 === Number(inn[10]) && controlN2 === Number(inn[11]);
    } else {
        return false;
    }
};
