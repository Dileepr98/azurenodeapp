"use strict";
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../app");

chai.use(chaiHttp);

describe("/GET", () => {
  it("returns the homepage", (done) => {
    chai
      .request(`http://localhost:3000`)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.contain("Hello World!");
        done();
      });
  });
});
