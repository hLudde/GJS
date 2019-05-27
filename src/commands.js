const cpu = require('./CPU');
exports.LD_nn_n = (register, eightBitValue)=>{
    switch(register){
        case 'B':
            cpu.setB(eightBitValue);
            break;
        case 'C':
            cpu.setC(eightBitValue);
            break;
        case 'D':
            cpu.setD(eightBitValue);
            break;
        case 'E':
            cpu.setE(eightBitValue);
            break;
        case 'H':
            cpu.setH(eightBitValue);
            break;
        case 'L':
            cpu.setL(eightBitValue);
            break;
        default:
            throw new Error('invalidRegisterExeption');
    }
    return 8;
}