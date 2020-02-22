const sinon = require('sinon');
const expect = require('chai').expect;
const proxyquire = require('proxyquire');

const strategySpy = {
    'generateUnpackedContents': sinon.spy()
};

const M19FTCFileStrategy = proxyquire('../../../../../strategies/franchise-common/m19/M19FTCFileStrategy', {
    '../../common/file/CommonFileStrategy': strategySpy
});

describe('M19 FTC File Strategy unit tests', () => {
    beforeEach(() => {
        strategySpy.generateUnpackedContents.resetHistory();
    });

    describe('can save updates made to data', () => {
        it('calls the common file algorithm', () => {
            let tables = [{
                'offset': 0,
                'data': Buffer.from([0x4F, 0x6C, 0x64, 0x44, 0x61, 0x74]),
                'hexData': Buffer.from([0x4F, 0x6C, 0x64, 0x44, 0x61, 0x74]),
                'isChanged': false
            }, {
                'offset': 6,
                'data': Buffer.from([0x4F, 0x6C, 0x64, 0x44, 0x61, 0x74]),
                'hexData': Buffer.from([0x4F, 0x6C, 0x64, 0x44, 0x61, 0x74]),
                'isChanged': false
            }]
            
            let data = Buffer.concat(tables.map((table) => {
                return table.hexData;
            }));

            M19FTCFileStrategy.generateUnpackedContents(tables, data);
            expect(strategySpy.generateUnpackedContents.calledOnce).to.be.true;
            expect(strategySpy.generateUnpackedContents.args[0][0]).to.eql(tables);
            expect(strategySpy.generateUnpackedContents.args[0][1]).to.eql(data);
        });
    });
});