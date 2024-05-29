import { listSearch, listInsert, listDelete, get } from "../src/linkedList.js";

describe("[연결 리스트]", function () {
  it("연결 리스트", function () {
    let result = null;
    result = listSearch(3);
    expect(result.value).toBe(null);

    listInsert(1);

    result = listSearch(1);
    expect(result.value).toBe(1);

    result = listSearch(3);
    expect(result.value).toBe(null);

    listInsert(3);

    result = listSearch(5);
    expect(result.value).toBe(null);

    result = listSearch(3);
    expect(result.value).toBe(3);

    result = listSearch(1);
    expect(result.value).toBe(1);

    listInsert(5);

    result = listSearch(5);
    expect(result.value).toBe(5);

    result = listSearch(3);
    expect(result.value).toBe(3);

    result = listSearch(7);
    expect(result.value).toBe(null);

    result = listSearch(1);
    expect(result.value).toBe(1);

    listDelete(5);

    result = listSearch(5);
    expect(result.value).toBe(null);

    result = listSearch(11);
    expect(result.value).toBe(null);

    result = listSearch(3);
    expect(result.value).toBe(3);

    result = listSearch(1);
    expect(result.value).toBe(1);

    listDelete(3);

    result = listSearch(3);
    expect(result.value).toBe(null);

    listDelete(1);
    listDelete(2);

    result = listSearch(1);
    expect(result.value).toBe(null);

    result = listSearch(2);
    expect(result.value).toBe(null);

    result = listSearch(5);
    expect(result.value).toBe(null);

    listInsert(7);

    result = listSearch(7);
    expect(result.value).toBe(7);

    result = listSearch(9);
    expect(result.value).toBe(null);
  });
});
