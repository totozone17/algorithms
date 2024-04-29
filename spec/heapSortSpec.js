import { getMaxHeapify, getBuildMaxHeap, getHeapSort } from '../src/heapSort.js';

describe("[Max-Heapify]", function() {
	it("동작", function() {
			expect(getMaxHeapify([27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9, 0], 2)).toEqual([27, 17, 10, 16, 13, 9, 1, 5, 7, 12, 4, 8, 3, 0]);
	});
});

describe("[Build-Max-Heap]", function() {
	it("동작", function() {
			expect(getBuildMaxHeap([5, 3, 17, 10, 84, 19, 6, 22, 9])).toEqual([84, 22, 19, 10, 3, 17, 6, 5, 9]);
	});
});

describe("[Heap-Sort]", function() {
	it("동작", function() {
			expect(getHeapSort([5, 13, 2, 25, 7, 17, 20, 8, 4])).toEqual([2, 4, 5, 7, 8, 13, 17, 20, 25]);

			expect(getHeapSort([31, 41, 57, 59, 26, 41])).toEqual([26, 31, 41, 41, 57, 59]);

			expect(getHeapSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);

			expect(getHeapSort([100, 5, 101, 55, 1000, 700, 9, 300, 5, 11, 99])).toEqual([5, 5, 9, 11, 55, 99, 100, 101, 300, 700, 1000]);
	});
});
