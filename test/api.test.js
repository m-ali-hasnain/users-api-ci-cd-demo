const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../');

chai.use(chaiHttp);

describe('API Test', function () {
  it('should return list of users', (done) => {
    chai
      .request(server)
      .get('/users')
      .end((err, res) => {
        if (err) done();
        expect(res?.body).to.be.an('array');
        done();
      });
  });
});

after(() => {
  chai.request(server).close();
  process.exit(0);
});
