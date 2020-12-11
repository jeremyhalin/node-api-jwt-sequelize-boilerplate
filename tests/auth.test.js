const { StatusCodes } = require("http-status-codes");
const request = require("supertest");
const app = require("../app");

const email = "demo@demo.com";
const password = "demo";

describe("POST /auth/register", function () {
  test("register a user", function (done) {
    request(app)
      .post("/api/v1/auth/register")
      .send({ email, password })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect((res) => {
        expect(res.body.data.type).toBe("user");
        expect(res.body.data).toHaveProperty("id");
        expect(res.body.data.attributes.email).toBe(email);
        expect(res.body.data.attributes.role).toBe("Guest");
      })
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe("POST /auth/login", function () {
  test("log in a user", function (done) {
    request(app)
      .post("/api/v1/auth/login")
      .send({ email, password })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect((res) => {
        expect(res.body.data.type).toBe("user");
        expect(res.body.data).toHaveProperty("id");
        expect(res.body.data.attributes.email).toBe(email);
        expect(res.body.data.attributes.role).toBe("Guest");
      })
      .expect(StatusCodes.OK)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
