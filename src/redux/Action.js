export const AddItem=(data)=>{
    return{
        type:"ADD",
        data:data
    }

}

export const DeleteItem=(data)=>{
    return{
        type:"DELETE",
        data:data
    }
}
export const IncrDecrQTY=(data)=>{
        return{
            type:"INCRorDECR",
            data:data
        }
    
}
export const DeleteAll=()=>{
    return{
        type:"DELETEALL",
        
    }
}