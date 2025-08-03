import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "ZeetLab Api",
    description: "Comprehensive API documentation for the ZeetLab platform.",
  },
  host: "localhost:3000",
};

const outputFile = "./swagger-output.json";
const routes = ["./app.ts"];

swaggerAutogen(outputFile, routes, doc);