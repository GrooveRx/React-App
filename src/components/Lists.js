import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Form, Input, Label, Row } from "reactstrap";
import  "./Style.css" 
import ListDelete from "./ListDelete";

const Lists = (props) => {
  const [itemname,setitemname]=useState("")
  const [itemQty,setItemQty]=useState(1)
  const ItemnameChange=(e)=>{
    setitemname(e.target.value)
  }

  const ItemQtyChange=(e)=>{
    if(e.target.value==0){
      setItemQty(1)
    }
    else{
      setItemQty(e.target.value)
    }
  }
  return (
    <div>
      <h2 className="App-header">Edit List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardHeader>
            <Form>
           <Row>
           <Col md={8}>
            <Label className="editTitle">Item Name*</Label>
            <Input type="text" className="itemInput" onChange={ItemnameChange}/>
            </Col>
            <Col md={4}>
              <Row>
              <Col md={8}>
                <Label className="editTitle">Quantity*</Label>
            <Input type="number" min={1} value={itemQty} onChange={ItemQtyChange} className="inputbox"/>
            </Col>
            <Col md={4}>
            <Button className="btn addBtn"  onClick={()=>{props.AddAnItem({"name":itemname,"qty":itemQty})}}>ADD</Button>
            </Col>
            </Row>
            </Col>
            </Row>
            </Form>
            <p className="textgrey">To get started, add 1 or more items</p>
          </CardHeader>
          <CardBody>
            <ListDelete Listitems={props.Listitems} removeItem={props.DeleteAnItem} removeAll={props.DeleteALL} incOrDec={props.IncreOrDecre}></ListDelete>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { Lists };
