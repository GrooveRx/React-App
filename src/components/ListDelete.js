import { Table, Card, CardBody } from "reactstrap";
import "./Style.css" 
import imagdown from '../images/chevron_down_small.svg'
import imagup from '../images/chevron_up_small.svg'

const ListDelete=(props)=>{
    const listItems=props.Listitems
    const increase=(item,index)=>{
      item.qty=item.qty+1
      props.incOrDec({"item":item,"index":index})
    }
    const decrease=(item,index)=>{
      if(item.qty>1){
      item.qty=item.qty-1
      }
      props.incOrDec({"item":item,"index":index})
    }
    return(
        <div>
      
      <div className=" justify-content-center">
        <Card className="w-100">
          <CardBody>
            <Table  >
                <tbody ><tr><td colSpan={3} className="ListTitle">Inventory List</td></tr></tbody>
              
              {listItems.map((item,index)=>(
                
              <tbody key={index}>
              <tr>
                <td>{item.name}</td>
                <td>Quantity: {item.qty} 
                <span className="arrbtns">
                <button className="qtybtn" onClick={()=>{increase(item,index)}}><img src={imagup}></img></button>
                <button className="qtybtn qtybtndown " onClick={()=>{decrease(item,index)}}><img src={imagdown} ></img></button>
                </span>
                </td>
                <td>
                <button className="btn deleteBtn" onClick={()=>{props.removeItem(item)}} >X</button>
                </td>
              </tr>
              
            </tbody>
              ))} 
              <tbody>
              <tr>
               <td colSpan={3}> <button className="btn clrbtn" onClick={()=>{props.removeAll()}} >Clear All</button></td>
              </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </div>
    )
}

export default ListDelete