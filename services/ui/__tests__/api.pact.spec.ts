import path from "path";
import { PactV3, MatchersV3, SpecificationVersion } from "@pact-foundation/pact";
const { eachLike, like } = MatchersV3;
import { fetchPeople } from "../src/utils";

const provider = new PactV3({
  consumer: "ui",
  provider: "apiA",
  logLevel: "warn",
  dir: path.resolve(process.cwd(), "../pacts"),
  spec: SpecificationVersion.SPECIFICATION_VERSION_V2,
});

describe("API Pact test", () => {
  describe("getting all people", () => {
    test("people exist", async () => {
      const setPeople = jest.fn();
      await provider.addInteraction({
        states: [{ description: "people exist" }],
        uponReceiving: "get all people",
        withRequest: {
          method: "GET",
          path: "/people",
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: eachLike({
            name: "Dan",
            age: 37,
          }),
        },
      });

      await provider.executeTest(async (mockService) => {
        const resPeople = await fetchPeople(`${mockService.url}/people`, setPeople);

        expect(resPeople).toEqual([
          {
            name: "Dan",
            age: 37,
          },
        ]);
      });
    });
  });
});
