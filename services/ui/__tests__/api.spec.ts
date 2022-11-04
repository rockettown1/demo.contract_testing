import nock from "nock";
import { fetchPeople } from "../src/utils";

describe("API", () => {
  test("get all the people", async () => {
    const setPeople = jest.fn();

    const people = [
      { name: "Dan", age: 37 },
      { name: "Ben", age: 24 },
      { name: "Stuart", age: 38 },
      { name: "Charlie", age: 23 },
    ];
    nock("http://localhost:5000").get("/people").reply(200, people, { "Access-Control-Allow-Origin": "*" });

    const respPeople = await fetchPeople("http://localhost:5000/people", setPeople);
    expect(respPeople).toEqual(people);
  });
});
