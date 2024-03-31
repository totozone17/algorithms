import { getAsc, getDesc, searchIndex, plusBinary } from '../src/insertionSort.js';

describe("[삽입 정렬]", function() {
	it("오름차순", function() {
			expect(getAsc([31, 41, 57, 59, 26, 41])).toEqual([26, 31, 41, 41, 57, 59]);

			expect(getAsc([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);

			expect(getAsc([100, 5, 101, 55, 1000, 700, 9, 300, 5, 11, 99])).toEqual([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000]);
	});
});

describe("[삽입 정렬]", function() {
	it("내림차순", function() {
			expect(getDesc([31, 41, 57, 59, 26, 41])).toEqual([59, 57, 41, 41, 31, 26]);

			expect(getDesc([5, 2, 4, 6, 1, 3])).toEqual([6, 5, 4, 3, 2, 1]);

			expect(getDesc([100, 5, 101, 55, 1000, 700, 9, 300, 5, 11, 99])).toEqual([1000, 700, 300, 101, 100, 99, 55, 11, 9, 5, 5]);
	});
});

describe("[삽입 정렬]", function() {
	it("인덱스 찾기", function() {
			expect(searchIndex([31, 41, 57, 59, 26, 41], 59)).toBe(3);

			expect(searchIndex([5, 2, 4, 6, 1, 3], 1)).toBe(4);

			expect(searchIndex([5, 2, 4, 6, 1, 3], 3)).toBe(5);

			expect(searchIndex([5, 2, 4, 6, 1, 3], 5)).toBe(0);

			expect(searchIndex([100, 5, 101, 55, 1000, 700, 9, 300, 5, 11, 99], 5)).toBe(1);

			expect(searchIndex([100, 5, 101, 55, 1000, 700, 9, 300, 5, 11, 99], 100)).toBe(0);

			expect(searchIndex([100, 5, 101, 55, 1000, 700, 9, 300, 5, 11, 99], 11)).toBe(9);
	});
});

describe("[삽입 정렬]", function() {
	it("이진수 더하기", function() {
			expect(plusBinary([0, 1, 1, 0], [1, 1, 1, 0])).toEqual([1, 0, 1, 0, 0]);

			expect(plusBinary([1, 0, 0, 0], [0, 0, 1, 0])).toEqual([0, 1, 0, 1, 0]);

			expect(plusBinary([1], [1])).toEqual([1, 0]);

			expect(plusBinary([0], [0])).toEqual([0, 0]);

			expect(plusBinary([1, 1, 1], [1, 1, 1])).toEqual([1, 1, 1, 0]);

			expect(plusBinary([1, 0, 1, 0, 1], [0, 1, 0, 1, 0])).toEqual([0, 1, 1, 1, 1, 1]);
	});
});