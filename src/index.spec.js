import {isInn, weightedSum} from "./index";

describe('weightedSum', () => {
    it("Throw error if different weights and array length", () => {
        expect(() => weightedSum([1, 2], [1, 2, 3])).toThrow("Different array and weights length!");
    });

    it("Throw error if NaN weight", () => {
        expect(() => weightedSum([1, 2], [3, "NaN"])).toThrow("NaN weight!");
    });

    it("Throw error if NaN array element", () => {
        expect(() => weightedSum(["NaN", 4], [3, 1])).toThrow("NaN array element!");
    });

    it("Correct weighted sum calc", () => {
        expect(weightedSum([1], [3])).toBe(3);
        expect(weightedSum([1, 2], [3, 4])).toBe(11);
        expect(weightedSum([1, -2], [3, 4])).toBe(-5);
    });

    it("String instead of array", () => {
        expect(weightedSum("1", [3])).toBe(3);
        expect(weightedSum("12", [3, 4])).toBe(11);
        expect(weightedSum("123", [3, 4, 5])).toBe(26);

        expect(weightedSum([1], "3")).toBe(3);
        expect(weightedSum([1, 2], "34")).toBe(11);
        expect(weightedSum([1, 2, 3], "345")).toBe(26);

        expect(weightedSum("1", "3")).toBe(3);
        expect(weightedSum("12", "34")).toBe(11);
        expect(weightedSum("123", "345")).toBe(26);
    });
});

describe("isInn", () => {
    it ("Correct inn", () => {
        expect(isInn("1111111117")).toBeTruthy();
        expect(isInn("7743013901")).toBeTruthy();
    });

    it("Wrong characters in inn", () => {
        expect(isInn("aa3343434")).toBeFalsy();
        expect(isInn("12k2333")).toBeFalsy();
        expect(isInn("123-=dd")).toBeFalsy();
        expect(isInn(" 7743013901")).toBeFalsy();
    });

    it("Wrong inn length", () => {
        expect(isInn("1")).toBeFalsy();
        expect(isInn("11111")).toBeFalsy();
        expect(isInn("11111111111")).toBeFalsy();
        expect(isInn("11111111111111")).toBeFalsy();
    });

    it ("Incorrect inn", () => {
        expect(isInn("1111211117")).toBeFalsy();
        expect(isInn("7743013902")).toBeFalsy();
    });
});