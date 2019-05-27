const cpu = require('../src/CPU');

test('load valid bytes into registers', ()=>{
    cpu.setA(0xFF);
    cpu.setB(0xFE);
    cpu.setC(0xFD);
    cpu.setD(0xFC);
    cpu.setE(0xFB);
    cpu.setF(0xFA);
    cpu.setH(0xF9);
    cpu.setL(0xF8);
    cpu.setSP(0xFFFF);
    cpu.setPC(0xFFFE);
    expect(cpu.getA()).toBe(0xFF);
    expect(cpu.getB()).toBe(0xFE);
    expect(cpu.getC()).toBe(0xFD);
    expect(cpu.getD()).toBe(0xFC);
    expect(cpu.getE()).toBe(0xFB);
    expect(cpu.getF()).toBe(0xFA);
    expect(cpu.getH()).toBe(0xF9);
    expect(cpu.getL()).toBe(0xF8);
    expect(cpu.getSP()).toBe(0xFFFF);
    expect(cpu.getPC()).toBe(0xFFFE);
})

test('load invalid bytes into registers', ()=>{
    //To high values
    expect(()=>{cpu.setA(0x100);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setB(0x100);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setC(0x100);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setD(0x100);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setE(0x100);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setF(0x100);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setH(0x100);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setL(0x100);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setSP(0x10000);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setPC(0x10000);}).toThrowError('invalidValueExeption');

    //negative values
    expect(()=>{cpu.setA(-0x01);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setB(-0x01);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setC(-0x01);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setD(-0x01);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setE(-0x01);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setF(-0x01);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setH(-0x01);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setL(-0x01);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setSP(-0x0001);}).toThrowError('invalidValueExeption');
    expect(()=>{cpu.setPC(-0x0001);}).toThrowError('invalidValueExeption');
})