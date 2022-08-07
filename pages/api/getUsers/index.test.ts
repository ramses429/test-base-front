import { getUsers } from ".";
describe("getUsers", () => {
  test("getUsers get user format", async () => {
    const result = await getUsers();

    expect(result).toHaveProperty("name");
    expect(result.name).toHaveProperty("title");
    expect(typeof result.name.title).toBe("string");

    expect(result.name).toHaveProperty("first");
    expect(typeof result.name.first).toBe("string");

    expect(result.name).toHaveProperty("last");
    expect(typeof result.name.last).toBe("string");

    expect(result).toHaveProperty("email");
    expect(typeof result.email).toBe("string");

    expect(result).toHaveProperty("phone");
    expect(typeof result.phone).toBe("string");

    expect(result).toHaveProperty("dob");
    expect(result.dob).toHaveProperty("age");
    expect(typeof result.dob.age).toBe("number");
  });
});
