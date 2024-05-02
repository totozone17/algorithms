import { getAsc } from '../src/countingSort.js';

describe("[계수 정렬]", function() {
	it("정렬", function() {
		expect(getAsc([6, 0, 2, 0, 1, 3, 4, 6, 1, 3, 2], 6)).toEqual([0, 0, 1, 1, 2, 2, 3, 3, 4, 6, 6]);
	});
});