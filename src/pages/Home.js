import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Category from "../components/category";
import Add from "../components/add";
import View from "../components/View";

export default function Home() {
  
  const [uploadVideoStatus,setUploadVideoStatus] =useState({})
  

  


  return (
    <div className="mb-5">

      <div>
          <Add setUploadVideoStatus={setUploadVideoStatus}/> 
      </div>   
       

      <div>
          <View uploadVideoStatus={uploadVideoStatus}  />
      </div>
    </div>
  );
}
