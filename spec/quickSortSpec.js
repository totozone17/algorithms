import { partition, quickSort } from '../src/quickSort.js';

describe("[퀵정렬]", function() {
	it("Partition", function() {
		expect(partition([13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11], 0, 11)).toEqual({
			inputs: [9, 5, 8, 7, 4, 2, 6, 11, 21, 13, 19, 12],
			q: 7,
		});
	});

	it("정렬", function() {
		expect(quickSort([31, 41, 57, 59, 26, 41], 0, 5)).toEqual([26, 31, 41, 41, 57, 59]);

    expect(quickSort([5, 2, 4, 6, 1, 3], 0, 5)).toEqual([1, 2, 3, 4, 5, 6]);

    expect(quickSort([100, 5, 101, 55, 1000, 700, 9, 300, 5, 11, 99], 0, 10)).toEqual([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000]);
	});
});