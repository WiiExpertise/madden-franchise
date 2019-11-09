const expect = require('chai').expect;
const schemaPicker = require('../../services/schemaPicker');

describe('schema picker service unit tests', () => {
  describe('retrieves the expected schema', () => {
    it('retrieves the exact schema match if exists', () => {
      const schema = schemaPicker.pick(19, 95, 7);
      expect(schema.major).to.equal(95);
      expect(schema.minor).to.equal(7);
      expect(schema.path).to.equal('c:\\Projects\\madden-franchise\\data\\schemas\\19\\95_7.gz')
    });

    it('retrieves the closest schema without going over if exact match doesnt exist', () => {
      const schema = schemaPicker.pick(20, 350, 1);
      expect(schema.major).to.equal(342);
      expect(schema.minor).to.equal(1);
      expect(schema.path).to.equal('c:\\Projects\\madden-franchise\\data\\schemas\\20\\342_1.gz')
    });

    it('retrieves the closest one after if no earlier file exists', () => {
      const schema = schemaPicker.pick(20, 330, 1);
      expect(schema.major).to.equal(342);
      expect(schema.minor).to.equal(1);
      expect(schema.path).to.equal('c:\\Projects\\madden-franchise\\data\\schemas\\20\\342_1.gz')
    });

    it('retrieves the closest one before if no higher one exists', () => {
      const schema = schemaPicker.pick(20, 370, 1);
      expect(schema.major).to.equal(360);
      expect(schema.minor).to.equal(1);
      expect(schema.path).to.equal('c:\\Projects\\madden-franchise\\data\\schemas\\20\\360_1.gz')
    });
  });
});