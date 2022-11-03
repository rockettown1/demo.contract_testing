import Fastify from "fastify";
import cors from "@fastify/cors";
import { externalServiceExample } from "./apiClient";

const server = Fastify({ logger: true });
const port = 5000;

server.register(cors, {
  origin: "*",
});

server.get("/health", async (_, reply) => {
  const result = await externalServiceExample.get("http://localhost:5001/health");
  reply.status(200).send({ message: `Hello ${result.message}` });
});

server.listen({ port }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
