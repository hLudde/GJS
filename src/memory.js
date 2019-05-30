var memory = new Array(parseInt(process.env.MEMORY_SIZE)+1);
exports.load = (pointer) => {
    if(validatePointer(pointer)){
        return memory[pointer]
    }
}

exports.set = (pointer, value)=>{
    if(validatePointer(pointer)&&validateValue(value)){
        memory[pointer] = value;
    }
}

exports.init = () =>{
    for(var i = 0; i<memory.length; i++){
        memory[i]=0x0000;
    }
}

exports.size = ()=>{
    return memory.length;
}

validateValue = (value)=>{
    if((value<0||value>0xFF)||value==undefined){
        throw new Error('invalidValueException');
    }
    return true;
}

validatePointer = (pointer)=>{
    if((pointer<0||pointer>=memory.length)||pointer==undefined){
        throw new Error('invalidPointerException');
    }
    return true;
}