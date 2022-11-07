import { externalServiceExample } from "./apiClient";

export const routes = async (instance: any) => {
  instance.route({
    method: "GET",
    url: "/greetings",
    handler: async (req: any, res: any) => {
      res.status(200).send({ message: "greetings" });
    },
  });

  instance.route({
    method: "GET",
    url: "/health",
    handler: async (_: any, reply: any) => {
      const result = await externalServiceExample.get("http://localhost:5001/health");
      reply.status(200).send({ message: `Hello ${result.message}` });
    },
  });

  instance.route({
    method: "GET",
    url: "/people",
    handler: async (_: any, reply: any) => {
      const result = await externalServiceExample.get("http://localhost:5001/people");
      console.log(result);
      reply.status(200).send(result);
    },
  });
};
