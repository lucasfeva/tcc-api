import Fastify from "fastify";

const server = Fastify({
  logger: true,
});

server.get("/", function (request, reply) {
  reply.send({ vtnc: "world" });
});

server.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running on http://localhost:3333");
});
