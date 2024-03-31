import { getAsc } from '../src/selectionSort.js';

describe("[선택 정렬]", function() {
	it("오름차순", function() {
			expect(getAsc([31, 41, 57, 59, 26, 41])).toEqual([26, 31, 41, 41, 57, 59]);

			expect(getAsc([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);

			expect(getAsc([100, 5, 101, 55, 1000, 700, 9, 300, 5, 11, 99])).toEqual([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000]);
	});
});
