import { extractMax, heapInsert } from '../src/priorityQueue.js';

describe("[우선순위 큐]", function() {
it("최대 추출", function() {
		expect(extractMax([15, 13, 9, 5, 12, 8, 7, 4, 0, 6, 2, 1])).toEqual({
			max: 15,
			inputs: [13, 12, 9, 5, 6, 8, 7, 4, 0, 1, 2]
		});
		expect(extractMax([5])).toEqual({
			max: 5,
			inputs: []
		});
		expect(extractMax([10, 4, 1])).toEqual({
			max: 10,
			inputs: [4, 1]
		});
	});

	it("최대 HEAP 삽입", function() {
		expect(heapInsert([15, 13, 9, 5, 12, 8, 7, 4, 0, 6, 2, 1], 10)).toEqual([15, 13, 10, 5, 12, 9, 7, 4, 0, 6, 2, 1, 8]);
	});
});
