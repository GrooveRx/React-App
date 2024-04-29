import { connect } from "react-redux";
import { Lists } from "../components";
import { AddItem, DeleteItem,DeleteAll, IncrDecrQTY } from "./Action";

const mapDispatchToProp=(dispatch)=>{
    return({
        AddAnItem:(data)=>{
            dispatch(AddItem(data))
        },
        DeleteAnItem:(data)=>{
            dispatch(DeleteItem(data))
        },
        DeleteALL:()=>{
            dispatch(DeleteAll())
        },
        IncreOrDecre:(data)=>{
            dispatch(IncrDecrQTY(data))
        }
    })
}
const mapStateToProp=(state)=>{
    return{Listitems:state}
}

export default connect(mapStateToProp,mapDispatchToProp)(Lists)