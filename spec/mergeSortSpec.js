import { getAsc, getMergeSort, getIndex, getSum } from '../src/mergeSort.js';

describe("[병합 정렬]", function() {
	it("오름차순", function() {
			expect(getAsc([3, 41, 52, 26, 38, 57, 9, 49])).toEqual([3, 9, 26, 38, 41, 49, 52, 57]);

			expect(getAsc([31, 41, 57, 59, 26, 41])).toEqual([26, 31, 41, 41, 57, 59]);

			expect(getAsc([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);

			expect(getAsc([100, 5, 101, 55, 1000, 700, 9, 300, 5, 11, 99])).toEqual([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000]);
	});
});

describe("[병합 정렬]", function() {
	it("책의 로직대로 병합 정렬", function() {
			expect(getMergeSort([3, 41, 52, 26, 38, 57, 9, 49])).toEqual([3, 9, 26, 38, 41, 49, 52, 57]);

			expect(getMergeSort([31, 41, 57, 59, 26, 41])).toEqual([26, 31, 41, 41, 57, 59]);

			expect(getMergeSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);

			expect(getMergeSort([100, 5, 101, 55, 1000, 700, 9, 300, 5, 11, 99])).toEqual([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000]);
	});
});

describe("[병합 정렬]", function() {
	it("정렬되어있는 수열 A에서 검색", function() {
			expect(getIndex([3, 9, 26, 38, 41, 49, 52, 57], 9)).toBe(1);

			expect(getIndex([26, 31, 41, 41, 57, 59], 59)).toEqual(5);

			expect(getIndex([1, 2, 3, 4, 5, 6], 1)).toEqual(0);

			expect(getIndex([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000], 9)).toEqual(2);

			expect(getIndex([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000], 100)).toEqual(6);

			expect(getIndex([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000], 101)).toEqual(7);

			expect(getIndex([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000], 99)).toEqual(5);

			expect(getIndex([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000], 700)).toEqual(9);

			expect(getIndex([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000], 500)).toEqual(-1);

			expect(getIndex([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000], 1)).toEqual(-1);

			expect(getIndex([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000], 250)).toEqual(-1);

			expect(getIndex([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000], 10000)).toEqual(-1);

			expect(getIndex([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000], 6)).toEqual(-1);

			expect(getIndex([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000], 102)).toEqual(-1);
	});
});

// 2.3.-7
describe("[병합 정렬]", function() {
	it("n개 정수의 집합 S와 어떤 정수 x가 주어였을 때, S의 두 원소의 합이 x가 되는 경우가 있는지 확인", function() {
		expect(getSum([3, 41, 52, 26, 38, 57, 9, 49], 44)).toEqual(true);

		expect(getSum([3, 41, 52, 26, 38, 57, 9, 50], 52)).toEqual(false);

		expect(getSum([31, 41, 57, 59, 26, 41], 77)).toEqual(false);

		expect(getSum([31, 41, 57, 59, 26, 41], 52)).toEqual(false);

		expect(getSum([31, 41, 57, 59, 26, 41], 98)).toEqual(true);

		expect(getSum([5, 2, 4, 6, 1, 3], 10)).toEqual(true);

		expect(getSum([5, 2, 4, 6, 1, 3], 12)).toEqual(false);

		expect(getSum([99, 100, 5, 101, 55, 1000, 700, 9, 300, 5, 11], 10)).toEqual(true);

		expect(getSum([100, 5, 55, 1000, 700, 9, 300, 5, 11, 99, 101], 106)).toEqual(true);

		expect(getSum([100, 700, 5, 101, 55, 1000, 9, 300, 5, 11, 99], 1005)).toEqual(true);

		expect(getSum([100, 5, 101, 55, 1000, 700, 9, 300, 5, 11, 99], 1700)).toEqual(true);

		expect(getSum([5, 101, 55, 1000, 700, 9, 300, 5, 100, 11, 99], 1000)).toEqual(true);

		expect(getSum([5, 101, 55, 1000, 11, 700, 100, 9, 300, 5, 99], 309)).toEqual(true);

		expect(getSum([100, 1000, 5, 101, 55, , 700, 9, 300, 5, 11, 99], 300)).toEqual(false);

		expect(getSum([100, 5, 55, 1000, 700, 9, 101, 300, 5, 11, 99], 18)).toEqual(false);

		expect(getSum([9, 100, 5, 101, 55, 1000, 700, 300, 5, 11, 99], 120)).toEqual(false);

		expect(getSum([5, 100, 55, 1000, 101, 700, 9, 300, 5, 11, 99], 900)).toEqual(false);

		expect(getSum([100, 700, 5, 101, 5, 11, 99, 55, 1000, 9, 300], 9)).toEqual(false);
	});
});