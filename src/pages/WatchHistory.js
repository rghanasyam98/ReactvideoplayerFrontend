import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { getHistory } from "../services/allAPI";
import Button from "react-bootstrap/Button";
import { deleteHistory } from "../services/allAPI";

export default function WatchHistory() {

const [history,setHistory]=useState([]);

async function getWatchHistory(){
 const response=await getHistory();
//  console.log(response.data);
 setHistory(response.data);
}

useEffect(()=>{
  getWatchHistory();
},[])


async function deleteThisHistory(id){
const response=await deleteHistory(id);
getWatchHistory();
}
  return (
    <div style={{ height: "450px" }} className="mt-3">
      <Row>
        <Col></Col>
        <Col lg={2}>
          <h3 style={{ color: "white" }}>WatchHistory</h3>{" "}
        </Col>
        <Col lg={6}></Col>
        <Col lg={2}>
          <Link style={{ textDecoration: "none", color: "white" }} to={"/home"}>
            <h3>
              <i class="fa-solid fa-arrow-left me-2 "></i>Back to home
            </h3>
          </Link>
        </Col>
        <Col></Col>
      </Row>

      <Row className="mt-3 p-5">
      {history.length >0 &&
       <Table striped bordered hover size="sm" className="p-5 table table-borderless" borderless={false}>
       <thead>
         <tr>
           <th>#</th>
           <th>Caption</th>
           <th>URL</th>
           <th>Timestamp</th>
           <th>Actions</th>
         </tr>
       </thead>
       <tbody>
        {history.map((item,index)=>(
          <tr key={item.id} >
          <td>{index+1}</td>
          <td>{item.videoCaption}</td>
          <td><a href={`${item.videoLinkUrl}?autoplay=1`} target="_blank" >{item.videoLinkUrl}</a></td>
          <td>{item.timestamp}</td>
          <td><Button
                            className="ms-5"
                            variant="danger"
                            style={{
                              height: "35px",
                              width: "50px",
                              background: "red",
                              
                            }}
                            onClick={()=>deleteThisHistory(item?.id)}
                          >
                            <span>
                              <i className="fa-solid fa-trash-can"></i>
                            </span>
                          </Button></td>
        </tr>
        ))}
         
        
       </tbody>
     </Table>
      }
      {
        history.length ===0 && <p>No history found</p>
      }
      </Row>
    </div>
  );
}
