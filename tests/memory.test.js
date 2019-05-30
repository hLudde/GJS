const mem = require('../src/memory');
test('initialise memory',()=>{
    mem.init();
    expect(mem.size()).toBe(parseInt(process.env.MEMORY_SIZE)+1);
    for(var i = 0x0000; i<mem.size; i++){
        expect(mem.load(i)).toBe(0x0000);
    }
})
test('set valid values', ()=>{
    mem.init();
    mem.set(0x0000, 0x00);
    mem.set(0xF000, 0x0F);
    mem.set(0xFFFF, 0xFF);
    expect(mem.load(0x0000)).toBe(0x00);
    expect(mem.load(0xF000)).toBe(0x0F);
    expect(mem.load(0xFFFF)).toBe(0xFF);
    mem.init();
})


test('set invalid values', ()=>{
    mem.init();
    expect(()=>{mem.set(0x10000, 0xFF)}).toThrowError('invalidPointerException');
    expect(()=>{mem.set(-0x0001, 0xFF)}).toThrowError('invalidPointerException');
    expect(()=>{mem.set(0x10000, 0x100)}).toThrowError('invalidPointerException');
    expect(()=>{mem.set(-0x0001, 0x100)}).toThrowError('invalidPointerException');
    expect(()=>{mem.set(-0x0001, -0x01)}).toThrowError('invalidPointerException');
    expect(()=>{mem.set(0x00FF, 0x100)}).toThrowError('invalidValueException');
    expect(()=>{mem.set(0xFF00, -0x01)}).toThrowError('invalidValueException');
    expect(()=>{mem.load(0x10000)}).toThrowError('invalidPointerException');
    expect(()=>{mem.load(-0x0001)}).toThrowError('invalidPointerException');
    mem.init();
})