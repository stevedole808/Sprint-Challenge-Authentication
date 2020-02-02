const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  describe("environment", () => {
    it("it should set env to testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
  describe("GET /", () => {
    it("it should return a 200 OK", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(404);
        });
    });
  });
});

describe("server.js", function() {
  describe("environment", function() {
    it("it should set environment to testing", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
});