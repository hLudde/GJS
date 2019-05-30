const cpu = require('../src/CPU');
const mem = require('../src/memory');

var startPoint = parseInt(process.env.START_POINT);

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

test('test program pointer',()=>{
    expect(cpu.getProgramCounter()).toBe(startPoint);
    cpu.increaseCounter();
    expect(cpu.getProgramCounter()).toBe(startPoint+1);
    cpu.setProgramCounter(startPoint)
    expect(cpu.getProgramCounter()).toBe(startPoint);
})


test('test opcodes', ()=>{
    mem.init();
    cpu.setB(0xAF);
    cpu.setC(0xFA);
    cpu.setD(0xFF);
    cpu.setE(0x23);
    cpu.setH(0x67);
    cpu.setL(0x34);
    mem.set(startPoint+0x0001, 0xF1);
    mem.set(startPoint+0x0003, 0xF2);
    mem.set(startPoint+0x0005, 0xF3);
    mem.set(startPoint+0x0007, 0xF4);
    mem.set(startPoint+0x0009, 0xF5);
    mem.set(startPoint+0x000B, 0xF6);
    cpu.setProgramCounter(startPoint)
    expect(cpu.opcode(0x06)).toBe(8);
    cpu.increaseCounter();
    expect(mem.load(0xF1)).toBe(0xAF);
    expect(cpu.opcode(0x0E)).toBe(8);
    cpu.increaseCounter();
    expect(mem.load(0xF2)).toBe(0xFA);
    expect(cpu.opcode(0x16)).toBe(8);
    cpu.increaseCounter();
    expect(mem.load(0xF3)).toBe(0xFF);
    expect(cpu.opcode(0x1E)).toBe(8);
    cpu.increaseCounter();
    expect(mem.load(0xF4)).toBe(0x23);
    expect(cpu.opcode(0x26)).toBe(8);
    cpu.increaseCounter();
    expect(mem.load(0xF5)).toBe(0x67);
    expect(cpu.opcode(0x2E)).toBe(8);
    cpu.increaseCounter();
    expect(mem.load(0xF6)).toBe(0x34);
})