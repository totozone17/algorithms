import { getAsc } from "../src/radixSort.js";

describe("[기수 정렬]", function () {
  it("정렬", function () {
    const words = [
      "COW",
      "DOG",
      "SEA",
      "RUG",
      "ROW",
      "MOB",
      "BOX",
      "TAB",
      "BAR",
      "EAR",
      "TAR",
      "DIG",
      "BIG",
      "TEA",
      "NOW",
      "FOX",
    ];

    expect(
      getAsc(words, 1)
    ).toEqual([
      "SEA",
      "TEA",
      "MOB",
      "TAB",
      "DOG",
      "RUG",
      "DIG",
      "BIG",
      "BAR",
      "EAR",
      "TAR",
      "COW",
      "ROW",
      "NOW",
      "BOX",
      "FOX",
    ]);

    expect(
      getAsc(words, 2)
    ).toEqual([
      "TAB",
      "BAR",
      "EAR",
      "TAR",
      "SEA",
      "TEA",
      "DIG",
      "BIG",
      "MOB",
      "DOG",
      "COW",
      "ROW",
      "NOW",
      "BOX",
      "FOX",
      "RUG",
    ]);

    expect(
      getAsc(words, 3)
    ).toEqual([
      "BAR",
      "BIG",
      "BOX",
      "COW",
      "DIG",
      "DOG",
      "EAR",
      "FOX",
      "MOB",
      "NOW",
      "ROW",
      "RUG",
      "SEA",
      "TAB",
      "TAR",
      "TEA",
    ]);
  });
});
