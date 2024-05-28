import { enqueue, dequeue, get } from "../src/queue.js";

describe("[큐]", function () {
  it("큐", function () {
    expect(function() { dequeue(); }).toThrow(new Error("underflow"));

    enqueue(1);
    enqueue(2);
    expect(get()).toEqual([1, 2, undefined, undefined, undefined]);

    expect(dequeue()).toBe(1);

    expect(get()).toEqual([1, 2, undefined, undefined, undefined]);

    enqueue(3);

    expect(get()).toEqual([1, 2, 3, undefined, undefined]);

    enqueue(4);
    enqueue(5);

    expect(get()).toEqual([1, 2, 3, 4, 5]);

    expect(function() { enqueue(6); }).toThrow(new Error("overflow"));

    expect(dequeue()).toBe(2);

    enqueue(7);

    expect(get()).toEqual([7, 2, 3, 4, 5]);

    expect(dequeue()).toBe(3);

    enqueue(8);

    expect(get()).toEqual([7, 8, 3, 4, 5]);

    expect(function() { enqueue(9); }).toThrow(new Error("overflow"));

    expect(dequeue()).toBe(4);
    expect(dequeue()).toBe(5);
    expect(dequeue()).toBe(7);
    expect(dequeue()).toBe(8);

    expect(function() { dequeue(); }).toThrow(new Error("underflow"));

    expect(get()).toEqual([7, 8, 3, 4, 5]);
  });
});
