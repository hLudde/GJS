const { LD_nn_n } = require('../src/commands');
const { getB, getC, getD, getE, getF, getH, getL } = require('../src/CPU');

test('load invalid bytes into registers', ()=>{
    var testAFail = ()=>{
        LD_nn_n('A', 0x12);
    };
    var testBFail = ()=>{
        LD_nn_n('B', 0x100);
    };
    var testCFail = ()=>{
        LD_nn_n('C', -0xF0);
    };
    expect(testAFail).toThrowError('invalidRegisterExeption');
    expect(testBFail).toThrowError('invalidValueExeption');
    expect(testCFail).toThrowError('invalidValueExeption');
})

test('load  valid bytes into reigsters',()=>{
    var testB = LD_nn_n('B', 0x13);
    var testC = LD_nn_n('C', 0x14);
    var testD = LD_nn_n('D', 0x15);
    var testE = LD_nn_n('E', 0x16);
    var testH = LD_nn_n('H', 0x18);
    var testL = LD_nn_n('L', 0xFF);
    expect(testB).toBe(8);
    expect(getB()).toBe(0x13);
    expect(testC).toBe(8);
    expect(getC()).toBe(0x14);
    expect(testD).toBe(8);
    expect(getD()).toBe(0x15);
    expect(testE).toBe(8);
    expect(getE()).toBe(0x16);
    expect(testH).toBe(8);
    expect(getH()).toBe(0x18);
    expect(testL).toBe(8);
    expect(getL()).toBe(0xFF);
})