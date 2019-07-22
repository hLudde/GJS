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
    expect(cpu.getHL()).toBe(0xF9F8);
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


test('test 1.LD_nn_n', ()=>{

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

function setRegisters(){
    cpu.setA(0x10);
    cpu.setB(0x11);
    cpu.setC(0x12);
    cpu.setD(0x13);
    cpu.setE(0x14);
    cpu.setH(0x15);
    cpu.setL(0x16);
}

test('test 2.LD_r1_r2', ()=>{

    mem.init();
    setRegisters()
    mem.set(0x1516, 0x20);
    cpu.setProgramCounter(startPoint)
    
    //A<-x
    expect(cpu.opcode(0x7F)).toBe(4);
    expect(cpu.getA()).toBe(0x10);

    expect(cpu.opcode(0x78)).toBe(4);
    expect(cpu.getA()).toBe(0x11);

    expect(cpu.opcode(0x79)).toBe(4);
    expect(cpu.getA()).toBe(0x12);

    expect(cpu.opcode(0x7A)).toBe(4);
    expect(cpu.getA()).toBe(0x13);

    expect(cpu.opcode(0x7B)).toBe(4);
    expect(cpu.getA()).toBe(0x14);

    expect(cpu.opcode(0x7C)).toBe(4);
    expect(cpu.getA()).toBe(0x15);

    expect(cpu.opcode(0x7D)).toBe(4);
    expect(cpu.getA()).toBe(0x16);

    expect(cpu.opcode(0x7E)).toBe(8);
    expect(cpu.getA()).toBe(0x20);

    //B<-x

    setRegisters()

    expect(cpu.opcode(0x40)).toBe(4);
    expect(cpu.getB()).toBe(0x11);

    expect(cpu.opcode(0x41)).toBe(4);
    expect(cpu.getB()).toBe(0x12);

    expect(cpu.opcode(0x42)).toBe(4);
    expect(cpu.getB()).toBe(0x13);

    expect(cpu.opcode(0x43)).toBe(4);
    expect(cpu.getB()).toBe(0x14);

    expect(cpu.opcode(0x44)).toBe(4);
    expect(cpu.getB()).toBe(0x15);

    expect(cpu.opcode(0x45)).toBe(4);
    expect(cpu.getB()).toBe(0x16);

    expect(cpu.opcode(0x46)).toBe(8);
    expect(cpu.getB()).toBe(0x20);

    //C<-x

    setRegisters()

    expect(cpu.opcode(0x48)).toBe(4);
    expect(cpu.getC()).toBe(0x11);
    
    expect(cpu.opcode(0x49)).toBe(4);
    expect(cpu.getC()).toBe(0x11);
    
    expect(cpu.opcode(0x4A)).toBe(4);
    expect(cpu.getC()).toBe(0x13);

    expect(cpu.opcode(0x4B)).toBe(4);
    expect(cpu.getC()).toBe(0x14);
    
    expect(cpu.opcode(0x4C)).toBe(4);
    expect(cpu.getC()).toBe(0x15);
    
    expect(cpu.opcode(0x4D)).toBe(4);
    expect(cpu.getC()).toBe(0x16);
    
    expect(cpu.opcode(0x4E)).toBe(8);
    expect(cpu.getC()).toBe(0x20);

    //D<-x

    setRegisters()

    expect(cpu.opcode(0x50)).toBe(4);
    expect(cpu.getD()).toBe(0x11);
    
    expect(cpu.opcode(0x51)).toBe(4);
    expect(cpu.getD()).toBe(0x12);
    
    expect(cpu.opcode(0x52)).toBe(4);
    expect(cpu.getD()).toBe(0x12);

    expect(cpu.opcode(0x53)).toBe(4);
    expect(cpu.getD()).toBe(0x14);
    
    expect(cpu.opcode(0x54)).toBe(4);
    expect(cpu.getD()).toBe(0x15);
    
    expect(cpu.opcode(0x55)).toBe(4);
    expect(cpu.getD()).toBe(0x16);
    
    expect(cpu.opcode(0x56)).toBe(8);
    expect(cpu.getD()).toBe(0x20);

    //E<-x

    setRegisters()

    expect(cpu.opcode(0x58)).toBe(4);
    expect(cpu.getE()).toBe(0x11);
    
    expect(cpu.opcode(0x59)).toBe(4);
    expect(cpu.getE()).toBe(0x12);
    
    expect(cpu.opcode(0x5A)).toBe(4);
    expect(cpu.getE()).toBe(0x13);

    expect(cpu.opcode(0x5B)).toBe(4);
    expect(cpu.getE()).toBe(0x13);
    
    expect(cpu.opcode(0x5C)).toBe(4);
    expect(cpu.getE()).toBe(0x15);
    
    expect(cpu.opcode(0x5D)).toBe(4);
    expect(cpu.getE()).toBe(0x16);
    
    expect(cpu.opcode(0x5E)).toBe(8);
    expect(cpu.getE()).toBe(0x20);

    //H<-x

    setRegisters()

    expect(cpu.opcode(0x60)).toBe(4);
    expect(cpu.getH()).toBe(0x11);
    
    expect(cpu.opcode(0x61)).toBe(4);
    expect(cpu.getH()).toBe(0x12);
    
    expect(cpu.opcode(0x62)).toBe(4);
    expect(cpu.getH()).toBe(0x13);

    expect(cpu.opcode(0x63)).toBe(4);
    expect(cpu.getH()).toBe(0x14);
    
    expect(cpu.opcode(0x64)).toBe(4);
    expect(cpu.getH()).toBe(0x14);
    
    expect(cpu.opcode(0x65)).toBe(4);
    expect(cpu.getH()).toBe(0x16);
    
    cpu.setH(0x15);
    cpu.setL(0x16);

    expect(cpu.opcode(0x66)).toBe(8);
    expect(cpu.getH()).toBe(0x20);

    //L<-x

    setRegisters()

    expect(cpu.opcode(0x68)).toBe(4);
    expect(cpu.getL()).toBe(0x11);
    
    expect(cpu.opcode(0x69)).toBe(4);
    expect(cpu.getL()).toBe(0x12);
    
    expect(cpu.opcode(0x6A)).toBe(4);
    expect(cpu.getL()).toBe(0x13);

    expect(cpu.opcode(0x6B)).toBe(4);
    expect(cpu.getL()).toBe(0x14);
    
    expect(cpu.opcode(0x6C)).toBe(4);
    expect(cpu.getL()).toBe(0x15);
    
    expect(cpu.opcode(0x6D)).toBe(4);
    expect(cpu.getL()).toBe(0x15);
    
    cpu.setH(0x15);
    cpu.setL(0x16);

    expect(cpu.opcode(0x6E)).toBe(8);
    expect(cpu.getL()).toBe(0x20);

    //(HL)<-x

    setRegisters()

    expect(cpu.opcode(0x70)).toBe(8);
    expect(mem.load(cpu.getHL())).toBe(0x11);
    
    expect(cpu.opcode(0x71)).toBe(8);
    expect(mem.load(cpu.getHL())).toBe(0x12);
    
    expect(cpu.opcode(0x72)).toBe(8);
    expect(mem.load(cpu.getHL())).toBe(0x13);

    expect(cpu.opcode(0x73)).toBe(8);
    expect(mem.load(cpu.getHL())).toBe(0x14);
    
    expect(cpu.opcode(0x74)).toBe(8);
    expect(mem.load(cpu.getHL())).toBe(0x15);
    
    expect(cpu.opcode(0x75)).toBe(8);
    expect(mem.load(cpu.getHL())).toBe(0x16);
    
})