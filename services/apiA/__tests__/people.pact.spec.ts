import { Verifier } from "@pact-foundation/pact";
import Fastify from "fastify";
import { routes } from "../src/routes";

import path from "path";

const mockServer = Fastify({ logger: false }).register(routes);
mockServer.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.log(err);
  }
});

describe("Pact Verification", () => {
  it("validates the expectations of apiA", () => {
    const opts = {
      providerBaseUrl: "http://localhost:8080",
      provider: "apiA",
      providerVersion: "1.0.0",
      pactUrls: [path.resolve(__dirname, "../../pacts/ui-apiA.json")],
    };

    return new Verifier(opts)
      .verifyProvider()
      .then((output) => {
        console.log(output);
      })
      .finally(() => {
        mockServer.close();
      });
  });
});
