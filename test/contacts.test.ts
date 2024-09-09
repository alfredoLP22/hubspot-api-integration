import request from "supertest";
import app from "../src/app";

describe("Contacts API", () => {
  it("should create a contact", async () => {
    const res = await request(app).post("/api/contacts").send({
      firstname: "John",
      lastname: "Doe",
      email: "john.doe@example.com",
      phone: "123456789",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });
});
