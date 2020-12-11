const request = require("supertest");
const HttpStatus = require("http-status-codes");
const app = require("../app");

const email = "demo@demo.com";
const password = "demo";
const firstname = "Hubert";
const lastname = "Bonisseur";

describe("Auth Endpoints", () => {
  test("create a new user", async (done) => {
    const response = await request(app).post("/api/v1/auth/register").send({
      email,
      password,
      firstname,
      lastname,
    });

    expect(response.body.data.type).toBe("user");
    expect(response.body.data.id).toBeDefined();
    expect(response.body).toHaveProperty("included");
    expect(response.body.included[0].type).toBe("token");
    expect(response.body.included[1].type).toBe("refresh_token");
    expect(response.status).toBe(HttpStatus.CREATED);
    done();
  });

  test("login a user", async (done) => {
    const response = await request(app).post("/api/v1/auth/login").send({
      email,
      password,
    });
    expect(response.body.data.type).toBe("user");
    expect(response.body.data.attributes.email).toBeDefined();
    expect(response.body.data.id).toBeDefined();
    expect(response.status).toBe(HttpStatus.OK);
    done();
  });

  test("login fails with invalid credentials", async (done) => {
    const response = await request(app).post("/api/v1/auth/login").send({
      email,
      password: "wrongpassword",
    });
    expect(response.status).toBe(HttpStatus.UNAUTHORIZED);
    done();
  });

  test("login fails with missing email", async (done) => {
    const response = await request(app).post("/api/v1/auth/login").send({
      password,
    });
    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    done();
  });

  test("login fails with missing password", async (done) => {
    const response = await request(app).post("/api/v1/auth/login").send({
      email,
    });
    expect(response.status).toBe(HttpStatus.BAD_REQUEST);
    done();
  });
});
