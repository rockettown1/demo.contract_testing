import Fastify from "fastify";

const server = Fastify({ logger: true });
const port = 5001;

server.get("/health", (_, reply) => {
  reply.status(200).send({ message: "World" });
});

server.listen({ port }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
