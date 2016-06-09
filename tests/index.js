'use strict';


//---------//
// Imports //
//---------//

const chai = require('chai')
  , chaiAsPromised = require('chai-as-promised')
  , common = require('./helpers/common')
  , rp = require('request-promise')
  ;


//------//
// Init //
//------//

chai.use(chaiAsPromised);
chai.should();


//------//
// Main //
//------//

describe('get', () => {
  afterEach(common.stopServer);

  it('should return a raw querystring', () => {
    return common.startServer()
      .then(() => rp({ uri: "http://localhost:8085/?'" }))
      .should.become('%27');
  });

  it('should return a decoded querystring', () => {
    return common.startServer(true)
      .then(() => rp({ uri: "http://localhost:8085/?'" }))
      .should.become("'");
  });
});
