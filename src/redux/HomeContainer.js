import { connect } from "react-redux";
import { Home } from "../components";

const mapStateToProp=(state)=>{
    return ({listItems:state})
}

export default connect(mapStateToProp)(Home)