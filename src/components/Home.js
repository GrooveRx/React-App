import React from "react";
import { Table, Card, CardBody } from "reactstrap";
import { Link, useNavigate  } from "react-router-dom";

const Home = (props) => {
  const listItems=props.listItems
  const navigate = useNavigate();
  const editList=()=>{
    navigate("/lists")
  }
  return (
    <div>
      <h2 className="App-header mb-3">Inventory List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardBody>
            <Table striped className="">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              {listItems.map((item,index)=>(
                
              <tbody key={index}>
              <tr>
                <th scope="row">{index+1}</th>
                <td>{item.name}</td>
                <td>{item.qty}</td>
              </tr>
            </tbody>
              ))} 
            </Table>
            <button className="btn editbtn" onClick={editList}>Edit List</button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export { Home };
