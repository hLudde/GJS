var commands = require('./commands');

var flagRegister = 0x00;
var programCounter = parseInt(process.env.START_POINT);

var A,F = 0x00;
var B,C = 0x00;
var D,E = 0x00;
var H,L = 0x00;
var SP = 0x0000;
var PC = 0x0000;

check8BitValue = (eightBitValue)=>{
    if(eightBitValue>0xFF||eightBitValue<0x00){
        throw new Error('invalidValueExeption');
    }
    return;
}
check16BitValue = (sixteenBitValue)=>{
    if(sixteenBitValue>0xFFFF||sixteenBitValue<0x0000){
        throw new Error('invalidValueExeption');
    }
    return;
}
exports.opcode = (opcode)=>{
    return commands.opcode(opcode);
}

exports.increaseCounter = ()=>{
    programCounter+=0x0001;
}
exports.getProgramCounter = ()=>{
    return programCounter;
}
exports.setProgramCounter = (pointer)=>{
    programCounter=pointer;
}

exports.setA = (eightBitValue)=>{
    check8BitValue(eightBitValue);
    A = eightBitValue;
}
exports.setB = (eightBitValue)=>{
    check8BitValue(eightBitValue);
    B = eightBitValue;
}
exports.setC = (eightBitValue)=>{
    check8BitValue(eightBitValue);
    C = eightBitValue;
}
exports.setD = (eightBitValue)=>{
    check8BitValue(eightBitValue);
    D = eightBitValue;
}
exports.setE = (eightBitValue)=>{
    check8BitValue(eightBitValue);
    E = eightBitValue;
}
exports.setF = (eightBitValue)=>{
    check8BitValue(eightBitValue);
    F = eightBitValue;
}
exports.setH = (eightBitValue)=>{
    check8BitValue(eightBitValue);
    H = eightBitValue;
}
exports.setL = (eightBitValue)=>{
    check8BitValue(eightBitValue);
    L = eightBitValue;
}
exports.setSP = (sixteenBitValue)=>{
    check16BitValue(sixteenBitValue);
    SP = sixteenBitValue;
}
exports.setPC = (sixteenBitValue)=>{
    check16BitValue(sixteenBitValue);
    PC = sixteenBitValue;
}
exports.getA = ()=>{
    return A;
}
exports.getB = ()=>{
    return B;
}
exports.getC = ()=>{
    return C;
}
exports.getD = ()=>{
    return D;
}
exports.getE = ()=>{
    return E;
}
exports.getF = ()=>{
    return F;
}
exports.getH = ()=>{
    return H;
}
exports.getL = ()=>{
    return L;
}
exports.getSP = ()=>{
    return SP;
}
exports.getPC = ()=>{
    return PC;
}
module.exports.flagRegister = flagRegister;