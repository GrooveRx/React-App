const initailState=[
    {
        "name":"Item 1",
        "qty":1
    },
    {
        "name":"Item 2",
        "qty":2
    },
    {
        "name":"Item 3",
        "qty":3
    }
]
const reducer=(state=initailState,action)=>{

    switch(action.type){
        case "ADD":{
            return([...state,action.data])
        }
        case "DELETE":{
            const i=state.indexOf(action.data)
            state.splice(i, 1);
            return([...state])
        }
        case "DELETEALL":{
            return([])
        }
        case "INCRorDECR":{
            state[action.data.index]=action.data.item
            return([...state])
        }
        default:{
            return state
        }
    }
}

export default reducer