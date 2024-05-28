import { pushAsc, pushDesc, popAsc, popDesc, get } from "../src/stack.js";

describe("[스택]", function () {
  it("스택", function () {
    expect(function() { popAsc(); }).toThrow(new Error("underflow"));

    expect(function() { popDesc(); }).toThrow(new Error("underflow"));

    pushAsc(1);
    pushAsc(2);
    pushAsc(3);
    expect(get()).toEqual([1, 2, 3, undefined, undefined]);

    expect(popAsc()).toBe(3);

    expect(get()).toEqual([1, 2, 3, undefined, undefined]);

    pushAsc(5);

    expect(get()).toEqual([1, 2, 5, undefined, undefined]);

    pushDesc(10);
    pushDesc(9);

    expect(get()).toEqual([1, 2, 5, 9, 10]);

    expect(function() { pushAsc(6); }).toThrow(new Error("overflow"));
    expect(function() { pushDesc(8); }).toThrow(new Error("overflow"));

    expect(popDesc()).toBe(9);

    pushDesc(8);

    expect(get()).toEqual([1, 2, 5, 8, 10]);

    expect(popAsc()).toBe(5);

    pushDesc(7);

    expect(get()).toEqual([1, 2, 7, 8, 10]);

    expect(function() { pushDesc(6); }).toThrow(new Error("overflow"));

    expect(popAsc()).toBe(2);
    expect(popAsc()).toBe(1);
    expect(function() { popAsc(); }).toThrow(new Error("underflow"));

    expect(get()).toEqual([1, 2, 7, 8, 10]);

    pushDesc(6);
    pushDesc(5);
    expect(function() { pushDesc(4); }).toThrow(new Error("overflow"));

    expect(get()).toEqual([5, 6, 7, 8, 10]);

    expect(popDesc()).toBe(5);
    expect(popDesc()).toBe(6);
    expect(popDesc()).toBe(7);
    expect(popDesc()).toBe(8);
    expect(popDesc()).toBe(10);
    expect(function() { popDesc(); }).toThrow(new Error("underflow"));

    expect(get()).toEqual([5, 6, 7, 8, 10]);
  });
});
