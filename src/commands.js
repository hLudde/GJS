const mem = require('./memory');
const cpu = require('./CPU');

LD_nn_n = (value)=>{
    cpu.increaseCounter();
    mem.set(mem.load(cpu.getProgramCounter()), value);
    return 8;
}

LD_r1_r2 = (r1, r2_val)=>{
    cpu.increaseCounter();
    switch(r1){
        case "A":
            cpu.setA(r2_val)
            return 4
        case "B":
            cpu.setB(r2_val)
            return 4
        case "C":
            cpu.setC(r2_val)
            return 4
        case "D":
            cpu.setD(r2_val)
            return 4
        case "E":
            cpu.setE(r2_val)
            return 4
        case "H":
            cpu.setH(r2_val)
            return 4
        case "L":
            cpu.setL(r2_val)
            return 4
        case "(HL)":
            mem.set(cpu.getHL(), r2_val)
            return 8
    }
}

exports.opcode = (opcode)=>{
    switch(opcode){
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
        //TODO
        /*
            CASE 0x36

            (HL), n 

            page 67
        */
        case 0x40:
            return LD_r1_r2("B", cpu.getB());
        case 0x41:
            return LD_r1_r2("B", cpu.getC());
        case 0x42:
            return LD_r1_r2("B", cpu.getD());
        case 0x43:
            return LD_r1_r2("B", cpu.getE());
        case 0x44:
            return LD_r1_r2("B", cpu.getH());
        case 0x45:
            return LD_r1_r2("B", cpu.getL());
        case 0x46:
            return LD_r1_r2("B", mem.load(cpu.getHL()))+4;
        case 0x48:
            return LD_r1_r2("C", cpu.getB());
        case 0x49:
            return LD_r1_r2("C", cpu.getC());
        case 0x4A:
            return LD_r1_r2("C", cpu.getD());
        case 0x4B:
            return LD_r1_r2("C", cpu.getE());
        case 0x4C:
            return LD_r1_r2("C", cpu.getH());
        case 0x4D:
            return LD_r1_r2("C", cpu.getL());
        case 0x4E:
            return LD_r1_r2("C", mem.load(cpu.getHL()))+4;
        case 0x50:
            return LD_r1_r2("D", cpu.getB());
        case 0x51:
            return LD_r1_r2("D", cpu.getC());
        case 0x52:
            return LD_r1_r2("D", cpu.getD());
        case 0x53:
            return LD_r1_r2("D", cpu.getE());
        case 0x54:
            return LD_r1_r2("D", cpu.getH());
        case 0x55:
            return LD_r1_r2("D", cpu.getL());
        case 0x56:
            return LD_r1_r2("D", mem.load(cpu.getHL()))+4;
        case 0x58:
            return LD_r1_r2("E", cpu.getB());
        case 0x59:
            return LD_r1_r2("E", cpu.getC());
        case 0x5A:
            return LD_r1_r2("E", cpu.getD());
        case 0x5B:
            return LD_r1_r2("E", cpu.getE());
        case 0x5C:
            return LD_r1_r2("E", cpu.getH());
        case 0x5D:
            return LD_r1_r2("E", cpu.getL());
        case 0x5E:
            return LD_r1_r2("E", mem.load(cpu.getHL()))+4;
        case 0x60:
            return LD_r1_r2("H", cpu.getB());
        case 0x61:
            return LD_r1_r2("H", cpu.getC());
        case 0x62:
            return LD_r1_r2("H", cpu.getD());
        case 0x63:
            return LD_r1_r2("H", cpu.getE());
        case 0x64:
            return LD_r1_r2("H", cpu.getH());
        case 0x65:
            return LD_r1_r2("H", cpu.getL());
        case 0x66:
            return LD_r1_r2("H", mem.load(cpu.getHL()))+4;
        case 0x68:
            return LD_r1_r2("L", cpu.getB());
        case 0x69:
            return LD_r1_r2("L", cpu.getC());
        case 0x6A:
            return LD_r1_r2("L", cpu.getD());
        case 0x6B:
            return LD_r1_r2("L", cpu.getE());
        case 0x6C:
            return LD_r1_r2("L", cpu.getH());
        case 0x6D:
            return LD_r1_r2("L", cpu.getL());
        case 0x6E:
            return LD_r1_r2("L", mem.load(cpu.getHL()))+4;
        case 0x70:
            return LD_r1_r2("(HL)", cpu.getB());
        case 0x71:
            return LD_r1_r2("(HL)", cpu.getC());
        case 0x72:
            return LD_r1_r2("(HL)", cpu.getD());
        case 0x73:
            return LD_r1_r2("(HL)", cpu.getE());
        case 0x74:
            return LD_r1_r2("(HL)", cpu.getH());
        case 0x75:
            return LD_r1_r2("(HL)", cpu.getL());
        case 0x78:
            return LD_r1_r2("A", cpu.getB());
        case 0x79:
            return LD_r1_r2("A", cpu.getC());
        case 0x7A:
            return LD_r1_r2("A", cpu.getD());
        case 0x7B:
            return LD_r1_r2("A", cpu.getE());
        case 0x7C:
            return LD_r1_r2("A", cpu.getH());
        case 0x7D:
            return LD_r1_r2("A", cpu.getL());
        case 0x7E:
            return LD_r1_r2("A", mem.load(cpu.getHL()))+4;
        case 0x7F:
            return LD_r1_r2("A", cpu.getA());
    }
}