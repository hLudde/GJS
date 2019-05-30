const mem = require('./memory');
const cpu = require('./CPU');

LD_nn_n = (value)=>{
    cpu.increaseCounter();
    mem.set(mem.load(cpu.getProgramCounter()), value);
    return 8;
}

exports.opcode = (opcode)=>{
    switch(opcode){
        /*
            8-Bit Loads
            1. LD_nn_n
        */
        case 0x06:
            return LD_nn_n(cpu.getB());
        case 0x0E:
            return LD_nn_n(cpu.getC());
        case 0x16:
            return LD_nn_n(cpu.getD());
        case 0x1E:
            return LD_nn_n(cpu.getE());
        case 0x26:
            return LD_nn_n(cpu.getH());
        case 0x2E:
            return LD_nn_n(cpu.getL());
    }
}