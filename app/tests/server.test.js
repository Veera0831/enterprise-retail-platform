const request = require("supertest");
const app = require("../src/server");

describe("Enterprise Retail API", () => {
  test("GET / should return application message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe(
      "Enterprise Retail API is running"
    );
  });

  test("GET /health should return UP status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
    expect(response.body.service).toBe("retail-api");
  });

  test("GET /api/products should return three products", async () => {
    const response = await request(app).get("/api/products");

    expect(response.statusCode).toBe(200);
    expect(response.body.count).toBe(3);
    expect(response.body.products).toHaveLength(3);
  });
});