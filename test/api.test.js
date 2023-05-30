// test/api.test.js
const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../index');

describe('API Tests', () => {
  it('should return a list of users', (done) => {
    supertest(app)
      .get('/users')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
