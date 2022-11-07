import Fastify from "fastify";
import cors from "@fastify/cors";
import { externalServiceExample } from "./apiClient";
import { routes } from "./routes";

const server = Fastify({ logger: true });
const port = 5000;

server.register(cors, {
  origin: "*",
});

server.register(routes);

server.listen({ port }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
